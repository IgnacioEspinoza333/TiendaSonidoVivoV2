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
import { AuthProvider } from './context/AuthContext';
import { ProductsProvider } from './context/ProductsContext';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    // Los providers envuelven toda la estructura para que Header y Rutas accedan a sesión, productos y carrito
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <Header />

          <main id="contenido">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<Catalog />} />
              <Route path="/producto/:id" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Register />} />
              <Route path="/carrito" element={<CartAndCheckout />} />

              {/* Rutas privadas: exigen sesión iniciada */}
              <Route element={<ProtectedRoute />}>
                <Route path="/perfil" element={<Profile />} />
                <Route path="/panel" element={<Dashboard />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}

export default App;