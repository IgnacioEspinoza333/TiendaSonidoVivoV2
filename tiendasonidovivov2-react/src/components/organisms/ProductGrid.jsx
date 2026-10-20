import ProductCard from '../molecules/ProductCard';

// Grilla del catálogo, o mensaje si no hay resultados
export default function ProductGrid({ productos }) {
  return (
    <section id="catalogo" aria-label="Listado de productos">
      <div className="grid-productos" id="grid-productos">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <ProductCard
              key={producto.id}
              id={producto.id}
              nombre={producto.nombre}
              categoria={producto.categoria}
              precio={producto.precio}
              descripcion={producto.descripcion}
              imagen={producto.imagen}
            />
          ))
        ) : (
          <div className="sin-resultados">
            <span className="sin-resultados-icono">🔎</span>
            <p>No encontramos productos que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </section>
  );
}