import { renderHook, act } from '@testing-library/react';
import { CartProvider, useCart } from './CartContext';

const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
const producto = { id: 1, nombre: 'Guitarra Test', precio: '349.990', imagen: '/img/test.jpg' };

describe('CartContext', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.spyOn(window, 'alert').mockImplementation(() => {}); // el carrito avisa con alert()
  });

  it('PU-24: agregar el mismo producto dos veces suma la cantidad y guarda en localStorage', () => {
    // Arrange
    const { result } = renderHook(() => useCart(), { wrapper });

    // Act
    act(() => {
      result.current.agregarAlCarrito(producto, 1);
      result.current.agregarAlCarrito(producto, 2);
    });

    // Assert
    expect(result.current.carrito).toHaveLength(1);
    expect(result.current.carrito[0].cantidad).toBe(3);
    expect(result.current.carrito[0].precio).toBe(349990);
    expect(JSON.parse(localStorage.getItem('carritoSonidoVivo'))).toHaveLength(1);
  });
});