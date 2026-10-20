import QuantityInput from '../atoms/QuantityInput';
import { formatoCLP, calcularSubtotal } from '../../utils/cartUtils';

// Una fila de la tabla del carrito
export default function CartItemRow({ item, onCantidad, onEliminar }) {
  return (
    <tr>
      <td><img src={item.imagen} alt={item.nombre} /></td>
      <td>{item.nombre}</td>
      <td>{formatoCLP(item.precio)}</td>
      <td>
        <QuantityInput value={item.cantidad} onChange={(cantidad) => onCantidad(item.id, cantidad)} />
      </td>
      <td>{formatoCLP(calcularSubtotal(item))}</td>
      <td>
        <button type="button" className="btn-eliminar" onClick={() => onEliminar(item.id)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
}