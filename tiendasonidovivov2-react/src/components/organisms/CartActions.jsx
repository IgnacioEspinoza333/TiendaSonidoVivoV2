import { Link } from 'react-router-dom';
import { formatoCLP } from '../../utils/cartUtils';

// Total del carrito y botones de acción (vaciar / seguir comprando)
export default function CartActions({ total, onVaciar }) {
  return (
    <>
      <div className="total-carrito-contenedor">
        Total a pagar: <span id="total-carrito">{formatoCLP(total)}</span>
      </div>

      <div className="acciones-carrito">
        <button type="button" className="btn-eliminar" onClick={onVaciar}>Vaciar Carrito</button>
        <div className="acciones-derecha">
          <Link to="/productos" className="btn-secundario-caja">Seguir Comprando</Link>
        </div>
      </div>
    </>
  );
}