import { screen, fireEvent } from '@testing-library/react';
import { Routes, Route } from 'react-router-dom';
import { renderConProviders } from '../testUtils';
import ProductDetail from './ProductDetail';
import { productsData } from '../data/products';
import { precioANumero } from '../utils/productUtils';

// Renderiza el detalle dentro de su ruta real (/producto/:id)
const renderDetalle = (ruta) =>
  renderConProviders(
    <Routes>
      <Route path="/producto/:id" element={<ProductDetail />} />
    </Routes>,
    { ruta }
  );

describe('ProductDetail', () => {
  it('PU-26: al cambiar la cantidad se recalcula el total', () => {
    // Arrange
    const producto = productsData[0];
    renderDetalle(`/producto/${producto.id}`);
    const totalEsperado = (precioANumero(producto.precio) * 3).toLocaleString('es-CL');

    // Act
    fireEvent.change(screen.getByLabelText('Cantidad:'), { target: { value: '3' } });

    // Assert
    expect(screen.getByText(`$${totalEsperado}`)).toBeInTheDocument();
  });

  it('PU-27: las pestañas alternan entre la descripción y las especificaciones', () => {
    // Arrange
    renderDetalle(`/producto/${productsData[0].id}`);
    expect(screen.getByText(/Estás viendo los detalles completos/)).toBeInTheDocument();

    // Act
    fireEvent.click(screen.getByRole('button', { name: 'Especificaciones' }));

    // Assert
    expect(screen.getByText('Categoría:')).toBeInTheDocument();
    expect(screen.queryByText(/Estás viendo los detalles completos/)).not.toBeInTheDocument();
  });

  it('PU-28: el botón de WhatsApp muestra el aviso de redirección', () => {
    // Arrange
    renderDetalle(`/producto/${productsData[0].id}`);
    expect(screen.queryByText(/Redirigiendo a WhatsApp/)).not.toBeInTheDocument();

    // Act
    fireEvent.click(screen.getByRole('button', { name: 'Cotizar por WhatsApp' }));

    // Assert
    expect(screen.getByText('¡Redirigiendo a WhatsApp de Sonido Vivo!')).toBeInTheDocument();
  });

  it('PU-29: un producto que no existe muestra "Producto no encontrado"', () => {
    // Arrange (id que no está en el catálogo)

    // Act
    renderDetalle('/producto/9999');

    // Assert
    expect(screen.getByText('Producto no encontrado')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Volver al Catálogo' })).toHaveAttribute('href', '/productos');
  });
});