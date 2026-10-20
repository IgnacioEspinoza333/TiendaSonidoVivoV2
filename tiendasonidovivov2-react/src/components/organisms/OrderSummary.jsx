import OrderSummaryItem from '../molecules/OrderSummaryItem';
import { formatoCLP } from '../../utils/cartUtils';

// Resumen de la orden (columna izquierda del checkout)
export default function OrderSummary({ carrito, total }) {
  return (
    <section className="resumen-orden">
      <h2>Resumen de tu Orden</h2>
      <div className="lista-resumen">
        {carrito.map((item) => (
          <OrderSummaryItem key={item.id} item={item} />
        ))}
      </div>
      <hr className="separador-resumen" />
      <div className="total-resumen">
        <span>Total Final:</span>
        <span className="precio-destacado">{formatoCLP(total)}</span>
      </div>
    </section>
  );
}