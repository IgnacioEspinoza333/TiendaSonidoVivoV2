import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductsContext';
import Breadcrumb from '../components/molecules/Breadcrumb';
import ProductGallery from '../components/organisms/ProductGallery';
import ProductInfo from '../components/organisms/ProductInfo';
import ErrorState from '../components/organisms/ErrorState';
import '../styles/estilosproducto.css';
import '../styles/estilosperfil.css';

export default function ProductDetail() {
  const { id } = useParams();
  const { productos } = useProducts();
  const producto = productos.find((p) => p.id === parseInt(id, 10));

  if (!producto) {
    return (
      <section id="contenido-producto">
        <ErrorState
          codigo="404"
          titulo="Producto no encontrado"
          mensaje="El producto que buscas no existe o fue eliminado del catálogo."
        >
          <Link to="/productos" className="btn-primario">Volver al Catálogo</Link>
        </ErrorState>
      </section>
    );
  }

  const migas = [
    { etiqueta: 'Inicio', to: '/' },
    { etiqueta: 'Catálogo', to: '/productos' },
    { etiqueta: producto.categoria, to: `/productos?categoria=${producto.categoria.toLowerCase()}` },
    { etiqueta: producto.nombre },
  ];

  return (
    <section id="contenido-producto">
      <Breadcrumb items={migas} />
      <div className="detalle-producto-contenedor">
        <ProductGallery producto={producto} />
        <ProductInfo producto={producto} />
      </div>
    </section>
  );
}