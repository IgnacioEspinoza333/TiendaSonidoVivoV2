import { Link } from 'react-router-dom';
import AuthCard from '../components/molecules/AuthCard';
import LoginForm from '../components/organisms/LoginForm';
import '../styles/estiloslogin.css';

export default function Login() {
  return (
    <section id="contenido-login">
      <AuthCard
        titulo="Iniciar Sesión"
        subtitulo="Ingresa a tu cuenta para gestionar tus compras"
        pie={<p>¿Aún no tienes una cuenta? <Link to="/registro">Regístrate aquí</Link></p>}
      >
        <LoginForm />
      </AuthCard>
    </section>
  );
}