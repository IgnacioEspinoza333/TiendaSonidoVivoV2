import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { productsData } from '../data/products';
import '../styles/estilosproducto.css';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { agregarAlCarrito } = useCart();

  const producto = productsData.find((p) => p.id === parseInt(id));

  const [cantidad, setCantidad] = useState(1);
  const [pestañaActiva, setPestañaActiva] = useState('detalles');
  const [mensajeWsp, setMensajeWsp] = useState(false);

  if (!producto) {
    return (
      <main id="contenido-producto" style={{ textAlign: 'center', padding: '5rem' }}>
        <h2>Producto no encontrado</h2>
        <Link to="/productos" className="btn-primario" style={{ marginTop: '2rem', display: 'inline-block' }}>
          Volver al Catálogo
        </Link>
      </main>
    );
  }

  // Lógica de cálculo
  const precioNumerico = Number(producto.precio.toString().replace('.', ''));
  const totalCalculado = (precioNumerico * cantidad).toLocaleString('es-CL');

  // Funciones de acción
  const manejarClickWsp = () => {
    setMensajeWsp(true);
    setTimeout(() => setMensajeWsp(false), 3000);
  };

  const handleAgregar = () => {
    agregarAlCarrito(producto, cantidad);
  };
  
  const handleComprarAhora = () => {
    agregarAlCarrito(producto, cantidad);
    navigate('/carrito');
  };

  return (
    <main id="contenido-producto">
      <div className="migas-de-pan">
        <Link to="/">Inicio</Link> &gt;
        <Link to="/productos">Catálogo</Link> &gt;
        <Link to={`/productos?categoria=${producto.categoria.toLowerCase()}`}>{producto.categoria}</Link> &gt;
        <span>{producto.nombre}</span>
      </div>

      <section className="detalle-producto-contenedor">
        <div className="galeria-producto">
          <div className="imagen-principal">
            <img src={producto.imagen} alt={producto.nombre} />
          </div>
          <Link to="/productos" className="btn-volver-catalogo">
            &larr; Volver al catálogo
          </Link>
        </div>

        <div className="info-producto">
          <span className="categoria-etiqueta">{producto.categoria}</span>
          <h2 className="titulo-producto">{producto.nombre}</h2>

          <div className="precio-contenedor">
            <span className="precio-actual">${producto.precio.toLocaleString('es-CL')}</span>
            <span className="precio-iva">Precio con IVA incluido</span>
          </div>

          <p className="descripcion-corta">{producto.descripcion}</p>

          <div className="selector-compra">
            <div className="cantidad-contenedor">
              <label htmlFor="cantidad">Cantidad:</label>
              <input 
                type="number" 
                id="cantidad" 
                min="1" 
                max="10" 
                value={cantidad} 
                onChange={(e) => setCantidad(Math.max(1, parseInt(e.target.value) || 1))}
              />
            </div>
            <div className="total-calculado">
              Total: <strong>${totalCalculado}</strong>
            </div>
          </div>

          <div className="acciones-compra" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {/* Los botones corregidos ahora están dentro del renderizado */}
            <button className="btn-comprar btn-rojo" onClick={handleAgregar}>
              🛒 Añadir al Carrito
            </button>
            <button className="btn-comprar btn-rojo" style={{ backgroundColor: '#2b2b2b' }} onClick={handleComprarAhora}>
              Comprar Ahora
            </button>
            <button className="btn-comprar btn-verde" onClick={manejarClickWsp}>
              Cotizar por WhatsApp
            </button>
            
            {mensajeWsp && (
              <p className="mensaje-confirmacion" style={{ color: '#25D366', width: '100%' }}>
                ¡Redirigiendo a WhatsApp de Sonido Vivo!
              </p>
            )}
          </div>

          <div className="pestañas-contenedor">
            <div className="pestañas-botones">
              <button 
                className={`btn-pestaña ${pestañaActiva === 'detalles' ? 'activa' : ''}`} 
                onClick={() => setPestañaActiva('detalles')}
              >
                Descripción Detallada
              </button>
              <button 
                className={`btn-pestaña ${pestañaActiva === 'especificaciones' ? 'activa' : ''}`} 
                onClick={() => setPestañaActiva('especificaciones')}
              >
                Especificaciones
              </button>
            </div>

            <div className="contenido-pestaña activa">
              {pestañaActiva === 'detalles' ? (
                <p>
                  Estás viendo los detalles completos de <strong>{producto.nombre}</strong>. {producto.descripcion} Este instrumento ha sido revisado por nuestros técnicos en Viña del Mar y cuenta con 6 meses de garantía directa en nuestra tienda.
                </p>
              ) : (
                <ul>
                  <li><strong>Categoría:</strong> {producto.categoria}</li>
                  <li><strong>Condición:</strong> Nuevo</li>
                  <li><strong>Disponibilidad:</strong> En stock local</li>
                  <li><strong>Envío:</strong> Despacho a todo Chile o retiro en local.</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}