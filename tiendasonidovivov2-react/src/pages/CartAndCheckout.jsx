import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { calcularTotal, contarUnidades } from '../utils/cartUtils';
import CartTable from '../components/organisms/CartTable';
import CartActions from '../components/organisms/CartActions';
import OrderSummary from '../components/organisms/OrderSummary';
import CheckoutForm from '../components/organisms/CheckoutForm';
import OrderConfirmation from '../components/organisms/OrderConfirmation';
import '../styles/estilosindex.css';
import '../styles/estiloscompra.css';

export default function CartAndCheckout() {
  const { carrito, vaciarCarrito, limpiarCarrito, eliminarProducto, actualizarCantidad } = useCart();
  const navigate = useNavigate();

  // Paso actual: 'carrito' (revisar productos) o 'pago' (formulario). El pedido existe solo tras pagar.
  const [paso, setPaso] = useState('carrito');
  const [pedido, setPedido] = useState(null);

  const total = calcularTotal(carrito);

  // Tras el pago exitoso, vuelve al inicio después de unos segundos
  useEffect(() => {
    if (!pedido) return undefined;
    const temporizador = setTimeout(() => navigate('/'), 4000);
    return () => clearTimeout(temporizador);
  }, [pedido, navigate]);

  const confirmarCompra = (datos) => {
    // Se guarda un resumen del pedido ANTES de vaciar el carrito
    setPedido({
      total,
      unidades: contarUnidades(carrito),
      entrega: datos.entrega,
      email: datos.email,
    });
    limpiarCarrito();
  };

  if (pedido) {
    return (
      <section id="contenido-compra">
        <OrderConfirmation pedido={pedido} />
      </section>
    );
  }

  if (carrito.length === 0) {
    return (
      <section id="contenido-compra">
        <h2>Tu Carrito de Compras</h2>
        <div className="carrito-vacio-bloque">
          <p className="carrito-vacio-texto">Tu carrito está actualmente vacío.</p>
          <Link to="/productos" className="btn-primario btn-ir-catalogo">Ir al Catálogo</Link>
        </div>
      </section>
    );
  }

  if (paso === 'pago') {
    return (
      <section id="contenido-compra">
        <button type="button" className="btn-secundario-caja btn-volver" onClick={() => setPaso('carrito')}>
          ← Volver al carrito
        </button>
        <div className="contenedor-checkout">
          <OrderSummary carrito={carrito} total={total} />
          <CheckoutForm onConfirmar={confirmarCompra} />
        </div>
      </section>
    );
  }

  return (
    <section id="contenido-compra">
      <h2>Tu Carrito de Compras</h2>
      <div id="contenedor-carrito">
        <CartTable carrito={carrito} onCantidad={actualizarCantidad} onEliminar={eliminarProducto} />
        <CartActions total={total} onVaciar={vaciarCarrito} onPagar={() => setPaso('pago')} />
      </div>
    </section>
  );
}