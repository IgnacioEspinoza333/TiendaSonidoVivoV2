import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../../context/AuthContext';
import useForm from '../../hooks/useForm';
import { validarLogin } from '../../utils/validators';
import { obtenerUsuarioRecordado, guardarUsuarioRecordado } from '../../services/authService';
import FormField from '../molecules/FormField';
import CheckField from '../molecules/CheckField';
import AuthButton from '../atoms/AuthButton';
import SuccessMessage from '../atoms/SuccessMessage';
import FieldError from '../atoms/FieldError';

export default function LoginForm() {
  const { verificarCredenciales, iniciarSesion } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // Si venía de una ruta protegida, vuelve ahí; si no, al catálogo
  const destino = location.state?.from?.pathname || '/productos';

  const recordado = obtenerUsuarioRecordado();
  const { values, errors, enviado, handleChange, handleSubmit } = useForm(
    { usuario: recordado, email: '', password: '', recordar: Boolean(recordado) },
    validarLogin
  );

  const [errorGeneral, setErrorGeneral] = useState('');
  // Usuario ya verificado: mientras exista se muestra el mensaje de éxito y se programa la redirección
  const [usuarioVerificado, setUsuarioVerificado] = useState(null);
  const exito = Boolean(usuarioVerificado);

  useEffect(() => {
    if (!usuarioVerificado) return undefined;
    const temporizador = setTimeout(() => {
      iniciarSesion(usuarioVerificado);
      navigate(destino, { replace: true });
    }, 2000);
    // Si el usuario sale de la página antes, se cancela la redirección
    return () => clearTimeout(temporizador);
  }, [usuarioVerificado, iniciarSesion, navigate, destino]);

  const onValido = (datos) => {
    const usuarioValido = verificarCredenciales(datos);
    if (!usuarioValido) {
      setErrorGeneral('Usuario, correo o contraseña incorrectos.');
      return;
    }
    setErrorGeneral('');
    guardarUsuarioRecordado(datos.usuario, datos.recordar);
    setUsuarioVerificado(usuarioValido);
  };

  const campo = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: handleChange,
    error: errors[name],
    validado: enviado,
  });

  return (
    <Form id="form-login" noValidate onSubmit={handleSubmit(onValido)}>
      <FormField {...campo('usuario')} label="Nombre de usuario:" placeholder="Ej: jperez" autoComplete="username" />
      <FormField {...campo('email')} type="email" label="Correo electrónico:" placeholder="ejemplo@gmail.com" autoComplete="email" />
      <FormField {...campo('password')} type="password" label="Contraseña:" placeholder="••••••••" autoComplete="current-password" />

      <div className="opciones-auth">
        <CheckField id="recordar" name="recordar" label="Recordarme" checked={values.recordar} onChange={handleChange} />
        <Link to="/login" className="olvida-pass" onClick={(e) => e.preventDefault()}>¿Olvidaste tu contraseña?</Link>
      </div>

      {errorGeneral && <div className="error-general"><FieldError mensaje={errorGeneral} /></div>}

      {!exito && <AuthButton id="btn-login">Ingresar</AuthButton>}
      {exito && <SuccessMessage id="mensaje-login-exito">¡Inicio de sesión exitoso! Redirigiendo...</SuccessMessage>}
    </Form>
  );
}