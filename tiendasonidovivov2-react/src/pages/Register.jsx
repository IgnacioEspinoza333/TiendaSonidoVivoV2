import { Link } from 'react-router-dom';
import AuthCard from '../components/molecules/AuthCard';
import RegisterForm from '../components/organisms/RegisterForm';
import '../styles/estiloslogin.css';

export default function Register() {
  return (
    <section id="contenido-login">
      <AuthCard
        ancha
        titulo="Crea tu Cuenta"
        subtitulo="Únete a la comunidad de Sonido Vivo"
        pie={<p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link></p>}
      >
        <RegisterForm />
      </AuthCard>
    </section>
  );
}