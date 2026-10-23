import { Link } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';
import FavoriteButton from '../atoms/FavoriteButton';

export default function ProductCard({ id, nombre, categoria, precio, descripcion, imagen }) {
  const { esFavorito, alternarFavorito } = useFavorites();

  return (
    <article className="tarjeta-producto" data-categoria={categoria.toLowerCase()}>
      <div className="producto-imagen-contenedor">
        <img src={imagen} alt={nombre} loading="lazy" />
        <span className="producto-categoria">{categoria}</span>
        <FavoriteButton activo={esFavorito(id)} onClick={() => alternarFavorito(id)} />
      </div>
      <div className="producto-info">
        <h3>{nombre}</h3>
        <p className="producto-descripcion">{descripcion}</p>
        <p className="producto-precio">${precio} <small>CLP (IVA incl.)</small></p>
        <div className="producto-acciones">
          {/* Aquí inyectamos el ID dinámicamente en la URL */}
          <Link to={`/producto/${id}`} className="btn-primario">Ver detalle</Link>
        </div>
      </div>
    </article>
  );
}