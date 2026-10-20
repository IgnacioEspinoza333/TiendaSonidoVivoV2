import { formatoCLP, calcularSubtotal } from '../../utils/cartUtils';

// Un producto dentro del resumen de la orden (columna izquierda del checkout)
export default function OrderSummaryItem({ item }) {
  return (
    <div className="producto-resumen">
      <img src={item.imagen} alt={item.nombre} width="60" />
      <div>
        <h4 className="resumen-nombre">{item.nombre}</h4>
        <p className="resumen-detalle">Cant: {item.cantidad} x {formatoCLP(item.precio)}</p>
        <p className="precio-destacado resumen-subtotal">{formatoCLP(calcularSubtotal(item))}</p>
      </div>
    </div>
  );
}