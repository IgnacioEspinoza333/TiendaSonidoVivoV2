import { useAuth } from '../context/AuthContext';
import { useProducts } from '../context/ProductsContext';
import ProductForm from '../components/organisms/ProductForm';
import ProductTable from '../components/organisms/ProductTable';
import '../styles/estilosindex.css';
import '../styles/estiloscompra.css';
import '../styles/estiloslogin.css';
import '../styles/estilospanel.css';
import { nombreCompleto } from '../utils/userUtils';

export default function Dashboard() {
  const { usuario } = useAuth();
  const { productos, agregarProducto, eliminarProducto } = useProducts();

  const confirmarEliminar = (producto) => {
    if (window.confirm(`¿Eliminar "${producto.nombre}" del catálogo?`)) {
      eliminarProducto(producto.id);
    }
  };

  return (
    <section id="contenido-panel">
      <h2>Panel de Control</h2>
      <p className="panel-subtitulo">
        Hola, {nombreCompleto(usuario)}. Los productos que agregues aquí se guardan solo mientras la página esté abierta.
      </p>

      <div className="panel-layout">
        <div className="panel-tarjeta">
          <h3>Nuevo producto</h3>
          <ProductForm onCrear={agregarProducto} />
        </div>

        <div className="panel-tarjeta">
          <h3>Catálogo actual <span className="panel-contador">({productos.length})</span></h3>
          <ProductTable productos={productos} onEliminar={confirmarEliminar} />
        </div>
      </div>
    </section>
  );
}