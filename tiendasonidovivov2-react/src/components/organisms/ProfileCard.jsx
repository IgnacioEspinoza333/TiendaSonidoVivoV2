import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { contarUnidades } from '../../utils/cartUtils';
import ProfileHeader from '../molecules/ProfileHeader';
import ProfileField from '../molecules/ProfileField';

// Tarjeta con los datos del usuario que inició sesión y accesos rápidos
export default function ProfileCard() {
  const { usuario, cerrarSesion } = useAuth();
  const { carrito } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
    cerrarSesion();
  };

  return (
    <article className="tarjeta-perfil">
      <ProfileHeader usuario={usuario} />

      <dl className="grid-perfil">
        <ProfileField etiqueta="Nombre completo" valor={usuario.nombre} />
        <ProfileField etiqueta="RUT" valor={usuario.rut} />
        <ProfileField etiqueta="Nombre de usuario" valor={usuario.usuario} />
        <ProfileField etiqueta="Correo electrónico" valor={usuario.email} />
        <ProfileField etiqueta="Instrumento principal" valor={usuario.instrumento} />
        <ProfileField etiqueta="Nivel de experiencia" valor={usuario.nivel} />
      </dl>

      <div className="acciones-perfil">
        <Link to="/panel" className="btn-primario">Ir al Panel de Control</Link>
        <Link to="/carrito" className="btn-secundario-caja">Ver carrito ({contarUnidades(carrito)})</Link>
        <button type="button" className="btn-eliminar" onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </article>
  );
}