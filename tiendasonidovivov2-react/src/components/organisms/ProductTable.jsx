import ProductTableRow from '../molecules/ProductTableRow';

// Tabla con todos los productos del catálogo (lectura y eliminación)
export default function ProductTable({ productos, onEliminar }) {
  return (
    <div className="tabla-responsiva">
      <table className="tabla-carrito">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <ProductTableRow key={producto.id} producto={producto} onEliminar={onEliminar} />
          ))}
        </tbody>
      </table>
    </div>
  );
}