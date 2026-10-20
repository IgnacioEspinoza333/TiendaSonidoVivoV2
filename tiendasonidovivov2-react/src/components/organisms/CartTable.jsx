import CartItemRow from '../molecules/CartItemRow';

// Tabla con los productos del carrito
export default function CartTable({ carrito, onCantidad, onEliminar }) {
  return (
    <div className="tabla-responsiva">
      <table className="tabla-carrito">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Nombre</th>
            <th>Precio Unitario</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item) => (
            <CartItemRow key={item.id} item={item} onCantidad={onCantidad} onEliminar={onEliminar} />
          ))}
        </tbody>
      </table>
    </div>
  );
}