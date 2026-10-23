import { screen, fireEvent } from '@testing-library/react';
import { renderConProviders } from '../../testUtils';
import ProductCard from './ProductCard';

describe('ProductCard', () => {
  it('PU-34: el corazón marca y desmarca el producto como favorito', () => {
    // Arrange
    renderConProviders(
      <ProductCard id={1} nombre="Guitarra Test" categoria="Guitarras" precio="349.990" descripcion="Guitarra de prueba" imagen="/img/test.jpg" />
    );
    const botonAgregar = screen.getByRole('button', { name: 'Agregar a favoritos' });
    expect(botonAgregar).toHaveAttribute('aria-pressed', 'false');

    // Act
    fireEvent.click(botonAgregar);

    // Assert
    expect(screen.getByRole('button', { name: 'Quitar de favoritos' })).toHaveAttribute('aria-pressed', 'true');
  });
});