import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import useForm from '../../hooks/useForm';
import { validarProducto } from '../../utils/validators';
import { CATEGORIAS, IMAGEN_POR_DEFECTO } from '../../data/opciones';
import FormField from '../molecules/FormField';
import SelectField from '../molecules/SelectField';
import TextAreaField from '../molecules/TextAreaField';
import AuthButton from '../atoms/AuthButton';
import SuccessMessage from '../atoms/SuccessMessage';

const VALORES_INICIALES = {
  nombre: '', categoria: '', marca: '', precio: '', stock: '', descripcion: '',
};

// Formulario para crear un producto nuevo (se guarda solo en memoria)
export default function ProductForm({ onCrear }) {
  const { values, errors, enviado, handleChange, handleSubmit, reset } = useForm(VALORES_INICIALES, validarProducto);
  const [creado, setCreado] = useState('');

  // El mensaje de éxito desaparece solo a los 3 segundos
  useEffect(() => {
    if (!creado) return undefined;
    const temporizador = setTimeout(() => setCreado(''), 3000);
    return () => clearTimeout(temporizador);
  }, [creado]);

  const onValido = (datos) => {
    const nuevo = onCrear(datos);
    setCreado(nuevo.nombre);
    reset();
  };

  const campo = (name) => ({
    id: `producto-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    error: errors[name],
    validado: enviado,
  });

  return (
    <Form id="form-producto" noValidate onSubmit={handleSubmit(onValido)}>
      <FormField {...campo('nombre')} label="Nombre del producto:" placeholder="Ej: Guitarra Eléctrica Telecaster" />
      <div className="fila-dos-columnas">
        <SelectField {...campo('categoria')} label="Categoría:" opciones={CATEGORIAS} placeholder="Selecciona..." />
        <FormField {...campo('marca')} label="Marca:" placeholder="Ej: Fender" />
      </div>
      <div className="fila-dos-columnas">
        <FormField {...campo('precio')} type="number" label="Precio (CLP):" placeholder="Ej: 349990" />
        <FormField {...campo('stock')} type="number" label="Stock (unidades):" placeholder="Ej: 5" />
      </div>
      <TextAreaField {...campo('descripcion')} label="Descripción:" placeholder="Características principales del producto" />

      <p className="nota-imagen">
        <img src={IMAGEN_POR_DEFECTO} alt="Imagen genérica" />
        Se asignará una imagen genérica por defecto.
      </p>

      <AuthButton id="btn-crear-producto">Agregar Producto</AuthButton>
      {creado && <SuccessMessage id="mensaje-producto-creado">¡"{creado}" fue agregado al catálogo!</SuccessMessage>}
    </Form>
  );
}