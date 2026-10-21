import { Link } from 'react-router-dom';

// Imagen principal del producto y enlace para volver al catálogo
export default function ProductGallery({ producto }) {
  return (
    <div className="galeria-producto">
      <div className="imagen-principal">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <Link to="/productos" className="btn-volver-catalogo">
        &larr; Volver al catálogo
      </Link>
    </div>
  );
}