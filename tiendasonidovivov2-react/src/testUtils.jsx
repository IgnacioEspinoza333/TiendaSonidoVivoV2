import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';

// Renderiza un componente con router y contextos, como lo hace App.jsx
export function renderConProviders(ui, { ruta = '/' } = {}) {
  return render(
    <MemoryRouter initialEntries={[ruta]}>
      <AuthProvider>
        <ProductsProvider>
          <CartProvider>{ui}</CartProvider>
        </ProductsProvider>
      </AuthProvider>
    </MemoryRouter>
  );
}