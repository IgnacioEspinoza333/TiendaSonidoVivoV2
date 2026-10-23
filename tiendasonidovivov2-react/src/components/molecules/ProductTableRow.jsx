import { Link } from 'react-router-dom';

// Una fila de la tabla de productos del panel
export default function ProductTableRow({ producto, onEditar, onEliminar }) {
  return (
    <tr>
      <td><img src={producto.imagen} alt={producto.nombre} /></td>
      <td>{producto.nombre}</td>
      <td>{producto.categoria}</td>
      <td>{producto.marca ?? '—'}</td>
      <td>${producto.precio}</td>
      <td>{producto.stock ?? '—'}</td>
      <td>
        <div className="acciones-fila">
          <Link to={`/producto/${producto.id}`} className="btn-secundario-caja btn-tabla">Ver</Link>
          <button type="button" className="btn-secundario-caja btn-tabla" onClick={() => onEditar(producto)}>
            Editar
          </button>
          <button type="button" className="btn-eliminar" onClick={() => onEliminar(producto)}>
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
}