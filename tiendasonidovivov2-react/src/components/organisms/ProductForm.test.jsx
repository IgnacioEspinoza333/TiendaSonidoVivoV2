import { screen, fireEvent, render } from '@testing-library/react';
import ProductForm from './ProductForm';

describe('ProductForm', () => {
  it('PU-19: con datos válidos llama a onCrear y muestra el mensaje de éxito', () => {
    // Arrange
    const onCrear = vi.fn((datos) => ({ nombre: datos.nombre }));
    render(<ProductForm onCrear={onCrear} />);
    fireEvent.change(screen.getByLabelText('Nombre del producto:'), { target: { value: 'Bajo Jazz' } });
    fireEvent.change(screen.getByLabelText('Categoría:'), { target: { value: 'Bajos' } });
    fireEvent.change(screen.getByLabelText('Marca:'), { target: { value: 'Fender' } });
    fireEvent.change(screen.getByLabelText('Precio (CLP):'), { target: { value: '450000' } });
    fireEvent.change(screen.getByLabelText('Stock (unidades):'), { target: { value: '3' } });
    fireEvent.change(screen.getByLabelText('Descripción:'), { target: { value: 'Bajo de cuatro cuerdas, excelente sonido.' } });

    // Act
    fireEvent.click(screen.getByRole('button', { name: 'Agregar Producto' }));

    // Assert
    expect(onCrear).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/Bajo Jazz/)).toBeInTheDocument();
    expect(screen.getByText(/fue agregado al catálogo/)).toBeInTheDocument();
  });
});