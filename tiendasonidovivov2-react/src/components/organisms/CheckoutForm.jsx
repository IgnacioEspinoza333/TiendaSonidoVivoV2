import Form from 'react-bootstrap/Form';
import { useAuth } from '../../context/AuthContext';
import useForm from '../../hooks/useForm';
import { validarCheckout } from '../../utils/validators';
import { FORMAS_PAGO, TIPOS_ENTREGA, REGIONES } from '../../data/opciones';
import FormField from '../molecules/FormField';
import SelectField from '../molecules/SelectField';
import RadioGroupField from '../molecules/RadioGroupField';

// Formulario de pago. Si hay sesión iniciada, precarga nombre, RUT y correo.
export default function CheckoutForm({ onConfirmar }) {
  const { usuario } = useAuth();

  const { values, errors, enviado, handleChange, handleSubmit } = useForm(
    {
      nombre: usuario?.nombre ?? '',
      apellido: usuario?.apellido ?? '',
      rut: usuario?.rut ?? '',
      email: usuario?.email ?? '',
      fono: '',
      fenac: usuario?.fechaNacimiento ?? '',
      entrega: 'retiro',
      region: '',
      direccion: '',
      fdepago: '',
    },
    validarCheckout
  );

  const campo = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: handleChange,
    error: errors[name],
    validado: enviado,
  });

  return (
    <section className="formulario-checkout">
      <h2>Datos de Pago</h2>
      <Form id="contacto" noValidate onSubmit={handleSubmit(onConfirmar)}>
        <FormField {...campo('nombre')} label="Nombre:" placeholder="Ej: Juan" autoComplete="given-name" />
        <FormField {...campo('apellido')} label="Apellido:" placeholder="Ej: Pérez" autoComplete="family-name" />
        <FormField {...campo('rut')} label="RUT:" placeholder="Formato 12345678-9 (Sin puntos)" />
        <FormField {...campo('email')} type="email" label="Correo electrónico:" placeholder="duocuc@gmail.com" autoComplete="email" />
        <FormField {...campo('fono')} type="tel" label="Teléfono:" placeholder="+56912345678" autoComplete="tel" />
        <FormField {...campo('fenac')} type="date" label="Fecha de nacimiento:" />

        {/* Campos de contexto de la tienda: cómo recibe su pedido el cliente */}
        <RadioGroupField legend="Tipo de entrega:" name="entrega" opciones={TIPOS_ENTREGA} value={values.entrega} onChange={handleChange} error={errors.entrega} />

        {values.entrega === 'despacho' && (
          <>
            <SelectField {...campo('region')} label="Región:" opciones={REGIONES} placeholder="Selecciona tu región" />
            <FormField {...campo('direccion')} label="Dirección de despacho:" placeholder="Calle, número, comuna" autoComplete="street-address" />
          </>
        )}

        <RadioGroupField legend="Forma de pago:" name="fdepago" opciones={FORMAS_PAGO} value={values.fdepago} onChange={handleChange} error={errors.fdepago} />

        <button type="submit" className="btn-pagar" id="btn-submit">Confirmar y Pagar</button>
      </Form>
    </section>
  );
}