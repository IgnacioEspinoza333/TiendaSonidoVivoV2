import { useState } from 'react'; // 1. Importamos el Hook de estado
import ProductCard from '../components/molecules/ProductCard';
import { productsData } from '../data/products';
import '../styles/estilosproductos.css';

export default function Catalog() {
  // 2. Definimos los estados para la barra de herramientas
  const [categoriaActiva, setCategoriaActiva] = useState('todos');
  const [busqueda, setBusqueda] = useState('');

  // 3. Lógica de Filtrado (Estado derivado)
  // En lugar de ocultar con CSS, filtramos el arreglo antes de renderizarlo
  const productosFiltrados = productsData.filter((producto) => {
    const coincideCategoria = categoriaActiva === 'todos' || producto.categoria.toLowerCase() === categoriaActiva;
    const coincideTexto = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    
    return coincideCategoria && coincideTexto;
  });

  return (
    <>
      <section className="catalogo-hero">
        <div className="contenedor-catalogo-hero">
          <span className="etiqueta">Catálogo Sonido Vivo</span>
          <h1>Encuentra tu próximo instrumento</h1>
          <p className="descripcion-hero">Explora nuestra colección de guitarras, teclados, baterías y equipos de audio profesional. Filtra por categoría o busca directamente por nombre.</p>
          
          <div className="barra-herramientas-integrada">
            <div className="barra-filtros" role="group" aria-label="Filtrar por categoría">
              {/* 4. Cambiamos la clase "activo" dinámicamente y usamos onClick para actualizar el estado */}
              <button 
                className={`filtro-boton ${categoriaActiva === 'todos' ? 'activo' : ''}`} 
                onClick={() => setCategoriaActiva('todos')}
              >Todos</button>
              <button 
                className={`filtro-boton ${categoriaActiva === 'guitarras' ? 'activo' : ''}`} 
                onClick={() => setCategoriaActiva('guitarras')}
              >Guitarras y Bajos</button>
              <button 
                className={`filtro-boton ${categoriaActiva === 'teclados' ? 'activo' : ''}`} 
                onClick={() => setCategoriaActiva('teclados')}
              >Teclados</button>
              <button 
                className={`filtro-boton ${categoriaActiva === 'baterias' ? 'activo' : ''}`} 
                onClick={() => setCategoriaActiva('baterias')}
              >Baterías</button>
              <button 
                className={`filtro-boton ${categoriaActiva === 'audio' ? 'activo' : ''}`} 
                onClick={() => setCategoriaActiva('audio')}
              >Audio y Amplificación</button>
            </div>

            <div className="buscador-productos">
              <span className="icono-buscar" aria-hidden="true">🔍</span>
              {/* 5. Input Controlado: Su valor y cambios están atados a React */}
              <input 
                type="search" 
                id="buscador-input" 
                placeholder="Buscar producto..." 
                aria-label="Buscar producto por nombre"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>
          </div>
          
          {/* 6. Contador dinámico basado en el largo del arreglo filtrado */}
          <p className="contador-resultados" id="contador-resultados" aria-live="polite">
            {productosFiltrados.length === 1 ? '1 producto encontrado' : `${productosFiltrados.length} productos encontrados`}
          </p>
        </div>
      </section>

      <section id="catalogo" aria-label="Listado de productos">
        <div className="grid-productos" id="grid-productos">
          {/* 7. Renderizado condicional: Iteramos productos o mostramos mensaje de vacío */}
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((producto) => (
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
            <div className="sin-resultados" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem' }}>
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🔎</span>
              <p>No encontramos productos que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}