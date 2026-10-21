import { renderHook, act } from '@testing-library/react';
import { ProductsProvider, useProducts } from './ProductsContext';

const wrapper = ({ children }) => <ProductsProvider>{children}</ProductsProvider>;

const datosProducto = {
  nombre: 'Teclado Nuevo', categoria: 'Teclados', marca: 'Yamaha',
  precio: '250000', stock: '2', descripcion: 'Teclado de 61 teclas sensibles.',
};

describe('ProductsContext', () => {
  it('PU-22: agregarProducto suma un producto nuevo al catálogo en memoria', () => {
    // Arrange
    const { result } = renderHook(() => useProducts(), { wrapper });
    const cantidadInicial = result.current.productos.length;

    // Act
    act(() => {
      result.current.agregarProducto(datosProducto);
    });

    // Assert
    expect(result.current.productos).toHaveLength(cantidadInicial + 1);
    expect(result.current.productos.at(-1).nombre).toBe('Teclado Nuevo');
  });

  it('PU-23: eliminarProducto quita del catálogo solo el producto indicado', () => {
    // Arrange
    const { result } = renderHook(() => useProducts(), { wrapper });
    const cantidadInicial = result.current.productos.length;
    const idAEliminar = result.current.productos[0].id;

    // Act
    act(() => {
      result.current.eliminarProducto(idAEliminar);
    });

    // Assert
    expect(result.current.productos).toHaveLength(cantidadInicial - 1);
    expect(result.current.productos.some((p) => p.id === idAEliminar)).toBe(false);
  });
});