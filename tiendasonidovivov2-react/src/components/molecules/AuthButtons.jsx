import { Link } from 'react-router-dom';

export default function AuthButtons({ isLogged = false, userName = '' }) {
  return (
    <div className="menu-auth-nav">
      {!isLogged ? (
        <div id="nav-visitante" className="nav-estado-sesion">
          <Link to="/login" className="btn-nav-login">Ingresar</Link>
          <Link to="/registro" className="btn-nav-registro">Registrarse</Link>
        </div>
      ) : (
        <div id="nav-usuario" className="nav-estado-sesion">
          <span id="nav-nombre-usuario">Hola, {userName}</span>
          <button id="btn-cerrar-sesion" className="btn-nav-logout">Cerrar Sesión</button>
        </div>
      )}
    </div>
  );
}