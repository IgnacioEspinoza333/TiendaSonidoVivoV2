import { useState } from 'react';
import { useProducts } from '../context/ProductsContext';
import { FILTROS_CATALOGO } from '../data/opciones';
import { filtrarProductos } from '../utils/productUtils';
import CategoryFilterBar from '../components/molecules/CategoryFilterBar';
import SearchBox from '../components/molecules/SearchBox';
import ProductGrid from '../components/organisms/ProductGrid';
import '../styles/estilosproductos.css';

export default function Catalog() {
  const { productos } = useProducts();

  // Estados de la barra de herramientas
  const [filtroActivo, setFiltroActivo] = useState('todos');
  const [busqueda, setBusqueda] = useState('');

  // Estado derivado: se filtra el arreglo antes de renderizar
  const filtro = FILTROS_CATALOGO.find((f) => f.valor === filtroActivo);
  const productosFiltrados = filtrarProductos(productos, filtro, busqueda);

  return (
    <>
      <section className="catalogo-hero">
        <div className="contenedor-catalogo-hero">
          <span className="etiqueta">Catálogo Sonido Vivo</span>
          <h1>Encuentra tu próximo instrumento</h1>
          <p className="descripcion-hero">Explora nuestra colección de guitarras, teclados, baterías y equipos de audio profesional. Filtra por categoría o busca directamente por nombre.</p>

          <div className="barra-herramientas-integrada">
            <CategoryFilterBar filtros={FILTROS_CATALOGO} activo={filtroActivo} onChange={setFiltroActivo} />
            <SearchBox value={busqueda} onChange={setBusqueda} />
          </div>

          <p className="contador-resultados" id="contador-resultados" aria-live="polite">
            {productosFiltrados.length === 1 ? '1 producto encontrado' : `${productosFiltrados.length} productos encontrados`}
          </p>
        </div>
      </section>

      <ProductGrid productos={productosFiltrados} />
    </>
  );
}