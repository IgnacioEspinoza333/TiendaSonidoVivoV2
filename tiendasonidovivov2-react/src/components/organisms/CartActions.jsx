import { Link } from 'react-router-dom';
import { formatoCLP } from '../../utils/cartUtils';

// Total del carrito y botones de acción (vaciar / seguir comprando / pagar)
export default function CartActions({ total, onVaciar, onPagar }) {
  return (
    <>
      <div className="total-carrito-contenedor">
        Total a pagar: <span id="total-carrito">{formatoCLP(total)}</span>
      </div>

      <div className="acciones-carrito">
        <button type="button" className="btn-eliminar" onClick={onVaciar}>Vaciar Carrito</button>
        <div className="acciones-derecha">
          <Link to="/productos" className="btn-secundario-caja">Seguir Comprando</Link>
          <button type="button" className="btn-primario btn-proceder-pago" onClick={onPagar}>
            Proceder al Pago
          </button>
        </div>
      </div>
    </>
  );
}