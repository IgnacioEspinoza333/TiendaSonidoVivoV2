import { Link, useLocation } from 'react-router-dom';
import ErrorState from '../components/organisms/ErrorState';
import '../styles/estilosindex.css';
import '../styles/estiloscompra.css';
import '../styles/estilosperfil.css';

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <section id="contenido-error">
      <ErrorState
        codigo="404"
        titulo="Esta página desafinó 🎸"
        mensaje={`No encontramos la dirección "${pathname}". Puede que el enlace esté roto o que la página ya no exista.`}
      >
        <Link to="/" className="btn-primario">Volver al inicio</Link>
        <Link to="/productos" className="btn-secundario-caja">Ir al catálogo</Link>
      </ErrorState>
    </section>
  );
}