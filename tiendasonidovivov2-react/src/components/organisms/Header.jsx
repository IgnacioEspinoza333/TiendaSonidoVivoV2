import { Link, useLocation } from 'react-router-dom';
import NavLink from '../atoms/NavLink';
import AuthButtons from '../molecules/AuthButtons';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

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
          </ul>
        </nav>

        <AuthButtons />
      </div>
    </header>
  );
}