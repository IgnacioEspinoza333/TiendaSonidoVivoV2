import { Routes, Route } from 'react-router-dom';
import './styles/estilosindex.css'; 

import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import CartAndCheckout from './pages/CartAndCheckout';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    // CartProvider envuelve toda la estructura para que Header y Rutas tengan acceso al carrito
    <CartProvider>
      {/* El Header debe estar aquí arriba */}
      <Header />
      
      <main id="contenido">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Catalog />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/carrito" element={<CartAndCheckout />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/panel" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* El Footer debe estar aquí abajo */}
      <Footer />
    </CartProvider>
  );
}

export default App;