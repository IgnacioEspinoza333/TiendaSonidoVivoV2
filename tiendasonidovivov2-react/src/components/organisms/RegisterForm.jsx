import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../../context/AuthContext';
import useForm from '../../hooks/useForm';
import { validarRegistro } from '../../utils/validators';
import { INSTRUMENTOS, NIVELES } from '../../data/opciones';
import FormField from '../molecules/FormField';
import SelectField from '../molecules/SelectField';
import CheckField from '../molecules/CheckField';
import AuthButton from '../atoms/AuthButton';
import SuccessMessage from '../atoms/SuccessMessage';
import FieldError from '../atoms/FieldError';

const VALORES_INICIALES = {
  nombre: '', apellido: '', rut: '', usuario: '', email: '',
  fechaNacimiento: '',
  instrumento: '', nivel: '',
  password: '', confirmarPassword: '', terminos: false,
};

export default function RegisterForm() {
  const { registrarUsuario } = useAuth();
  const navigate = useNavigate();
  const { values, errors, enviado, handleChange, handleSubmit } = useForm(VALORES_INICIALES, validarRegistro);

  const [errorGeneral, setErrorGeneral] = useState('');
  const [exito, setExito] = useState(false);

  useEffect(() => {
    if (!exito) return undefined;
    const temporizador = setTimeout(() => navigate('/login'), 2500);
    return () => clearTimeout(temporizador);
  }, [exito, navigate]);

  const onValido = (datos) => {
    const resultado = registrarUsuario(datos);
    if (!resultado.ok) {
      setErrorGeneral(resultado.error);
      return;
    }
    setErrorGeneral('');
    setExito(true);
  };

  const campo = (name, id = name) => ({
    id,
    name,
    value: values[name],
    onChange: handleChange,
    error: errors[name],
    validado: enviado,
  });

  return (
    <Form id="form-registro" noValidate onSubmit={handleSubmit(onValido)}>
      {/* Datos personales */}
      <div className="fila-dos-columnas">
        <FormField {...campo('nombre')} label="Nombre:" placeholder="Ej: Juan" autoComplete="given-name" />
        <FormField {...campo('apellido')} label="Apellido:" placeholder="Ej: Pérez" autoComplete="family-name" />
      </div>

      <div className="fila-dos-columnas">
        <FormField {...campo('rut')} label="RUT (sin puntos, con guion):" placeholder="Ej: 12345678-9" />
        <FormField {...campo('fechaNacimiento', 'fecha-nacimiento')} type="date" label="Fecha de nacimiento:" autoComplete="bday" />
      </div>

      {/* Datos de la cuenta */}
      <FormField {...campo('usuario')} label="Nombre de usuario:" placeholder="Ej: jperez" autoComplete="username" />
      <FormField {...campo('email')} type="email" label="Correo electrónico:" placeholder="ejemplo@gmail.com" autoComplete="email" />

      <div className="fila-dos-columnas">
        <FormField {...campo('password')} type="password" label="Contraseña:" placeholder="Mínimo 6 caracteres" autoComplete="new-password" />
        <FormField {...campo('confirmarPassword', 'confirmar-password')} type="password" label="Confirmar contraseña:" placeholder="Repite tu contraseña" autoComplete="new-password" />
      </div>

      {/* Datos de contexto de la tienda: qué toca y a qué nivel */}
      <div className="fila-dos-columnas">
        <SelectField {...campo('instrumento')} label="Instrumento principal:" opciones={INSTRUMENTOS} placeholder="Selecciona..." />
        <SelectField {...campo('nivel')} label="Nivel de experiencia:" opciones={NIVELES} placeholder="Selecciona..." />
      </div>

      <div className="opciones-auth opciones-auth-registro">
        <CheckField
          id="terminos"
          name="terminos"
          checked={values.terminos}
          onChange={handleChange}
          error={errors.terminos}
          label={<>Acepto los <Link to="/registro" className="olvida-pass" onClick={(e) => e.preventDefault()}>Términos y Condiciones</Link></>}
        />
      </div>

      {errorGeneral && <div className="error-general"><FieldError mensaje={errorGeneral} /></div>}

      {!exito && <AuthButton id="btn-registro">Crear Cuenta</AuthButton>}
      {exito && <SuccessMessage id="mensaje-registro-exito">¡Cuenta creada con éxito! Redirigiendo al Login...</SuccessMessage>}
    </Form>
  );
}