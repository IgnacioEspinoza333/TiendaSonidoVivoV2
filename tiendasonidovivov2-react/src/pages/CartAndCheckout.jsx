import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/estilosindex.css'; 
import '../styles/estiloscompra.css';

export default function CartAndCheckout() {
  // Extraemos los datos y funciones reales del contexto
  const { carrito, vaciarCarrito, eliminarProducto, actualizarCantidad } = useCart();

  // Calculamos el total
  const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

  return (
    <main id="contenido-compra">
      <h2>Tu Carrito de Compras</h2>
      
      {carrito.length === 0 ? (
        <div id="carrito-vacio-msg" style={{ textAlign: 'center', padding: '3rem 0' }}>
          <p className="carrito-vacio-texto" style={{ marginBottom: '1.5rem' }}>Tu carrito está actualmente vacío.</p>
          <Link to="/productos" className="btn-primario btn-ir-catalogo">Ir al Catálogo</Link>
        </div>
      ) : (
        <div id="contenedor-carrito">
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
              <tbody id="filas-carrito">
                {carrito.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.imagen} alt={item.nombre} style={{ width: '60px', borderRadius: '4px' }} />
                    </td>
                    <td>{item.nombre}</td>
                    <td>${item.precio.toLocaleString('es-CL')}</td>
                    <td>
                      {/* El input va aquí adentro de la tabla */}
                      <input 
                        type="number" 
                        min="1" 
                        max="10" 
                        value={item.cantidad} 
                        style={{ width: '50px', textAlign: 'center' }}
                        onChange={(e) => actualizarCantidad(item.id, parseInt(e.target.value) || 1)}
                      />
                    </td>
                    <td>${(item.precio * item.cantidad).toLocaleString('es-CL')}</td>
                    <td>
                      <button 
                        className="btn-eliminar" 
                        onClick={() => eliminarProducto(item.id)}
                        style={{ padding: '0.5rem 1rem' }}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="total-carrito-contenedor" style={{ textAlign: 'right', margin: '2rem 0', fontSize: '1.2rem', fontWeight: 'bold' }}>
            Total a pagar: <span id="total-carrito">${total.toLocaleString('es-CL')}</span>
          </div>

          <div className="acciones-carrito" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <button className="btn-eliminar" onClick={vaciarCarrito}>Vaciar Carrito</button>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
              <Link to="/productos" className="btn-secundario-caja" style={{ textDecoration: 'none', padding: '0.8rem 1.5rem', border: '1px solid #ccc', color: '#333' }}>
                Seguir Comprando
              </Link>
              <Link to="/checkout" className="btn-primario btn-proceder-pago">
                Proceder al Pago
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}