import { screen, fireEvent, render } from '@testing-library/react';
import CartTable from './CartTable';
import { formatoCLP } from '../../utils/cartUtils';

describe('CartTable', () => {
  it('PU-18: muestra el producto con su subtotal y llama a onEliminar con su id', () => {
    // Arrange
    const carrito = [{ id: 7, nombre: 'Guitarra Test', precio: 100000, cantidad: 2, imagen: '/img/test.jpg' }];
    const onEliminar = vi.fn();
    render(<CartTable carrito={carrito} onCantidad={vi.fn()} onEliminar={onEliminar} />);

    // Act
    fireEvent.click(screen.getByRole('button', { name: 'Eliminar' }));

    // Assert
    expect(screen.getByText('Guitarra Test')).toBeInTheDocument();
    expect(screen.getByText(formatoCLP(200000))).toBeInTheDocument();
    expect(onEliminar).toHaveBeenCalledWith(7);
  });
});