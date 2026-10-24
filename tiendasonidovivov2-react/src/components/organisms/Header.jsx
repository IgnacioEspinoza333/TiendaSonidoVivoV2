import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import NavLink from '../atoms/NavLink';
import AuthButtons from '../molecules/AuthButtons';
import ThemeToggleButton from '../atoms/ThemeToggleButton';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const navigate = useNavigate();
  const { usuario, estaAutenticado, esAdmin, cerrarSesion } = useAuth();
  const { esOscuro, alternarTema } = useTheme();
  
  const handleLogout = () => {
    cerrarSesion();
    navigate('/');
  };

  return (
    <header id="encabezado">
      <div className="encabezado-contenedor">
        <div className="marca">
          <Link to="/" className="logo-enlace">
            <img src="/img/logo-tienda.jpg" alt="Logo Sonido Vivo" className="logo-img" />
          </Link>
          <div className="marca-texto">
            <span className="marca-subtitulo">Viña del Mar · 11 años con la música</span>
            <h1 className="logo-texto"><Link to="/">SONIDO VIVO</Link></h1>
          </div>
        </div>

        <nav id="menu-principal">
          <ul>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/productos">Catálogo</NavLink>

            {/* Renderizado condicional del menú según la ruta actual */}
            {isHome ? (
              <>
                <NavLink to="/#presentacion">Nosotros</NavLink>
                <NavLink to="/#taller">Reparaciones</NavLink>
              </>
            ) : (
              <NavLink to="/carrito">Carrito</NavLink>
            )}

            {/* Enlaces visibles solo con sesión iniciada */}
            {estaAutenticado && (
              <>
                <NavLink to="/perfil">Mi Perfil</NavLink>
                {esAdmin && <NavLink to="/panel">Panel</NavLink>}
              </>
            )}
          </ul>
        </nav>

        {/* Botón de tema junto a los botones de sesión; en móvil quedan en la misma fila */}
        <div className="menu-acciones">
          <ThemeToggleButton esOscuro={esOscuro} onClick={alternarTema} />
          <AuthButtons isLogged={estaAutenticado} userName={usuario?.usuario} onLogout={handleLogout} />
        </div>
      </div>
    </header>
  );
}