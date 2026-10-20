import { formatoCLP } from '../../utils/cartUtils';

// Pantalla que reemplaza al checkout cuando el pago fue exitoso
export default function OrderConfirmation({ pedido }) {
  const detalleEntrega =
    pedido.entrega === 'despacho'
      ? 'Tu pedido será despachado a la dirección indicada.'
      : 'Puedes retirar tu pedido en nuestra tienda de Viña del Mar.';

  return (
    <div className="confirmacion-compra">
      <h2>¡Pago exitoso!</h2>
      <p>
        Compraste {pedido.unidades} unidad(es) por un total de{' '}
        <strong className="precio-destacado">{formatoCLP(pedido.total)}</strong>.
      </p>
      <p>{detalleEntrega}</p>
      <p>Enviaremos el comprobante a {pedido.email}.</p>
      <p className="mensaje-oculto mensaje-visible">Redirigiendo al inicio...</p>
    </div>
  );
}