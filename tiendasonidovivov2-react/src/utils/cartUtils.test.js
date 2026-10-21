import { calcularTotal, contarUnidades, formatoCLP } from './cartUtils';

describe('cartUtils', () => {
  it('PU-08: calcula el total, las unidades y el formato de precio del carrito', () => {
    // Arrange
    const carrito = [
      { id: 1, precio: 349990, cantidad: 2 },
      { id: 2, precio: 1000, cantidad: 3 },
    ];

    // Act
    const total = calcularTotal(carrito);
    const unidades = contarUnidades(carrito);

    // Assert
    expect(total).toBe(702980);
    expect(unidades).toBe(5);
    expect(formatoCLP(total)).toBe(`$${total.toLocaleString('es-CL')}`);
  });
});