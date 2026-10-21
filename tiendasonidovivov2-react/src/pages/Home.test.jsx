import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home', () => {
  it('PU-30: muestra las secciones principales y las 4 categorías con enlace al catálogo', () => {
    // Arrange
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Act (la página se muestra al renderizar; no requiere acción del usuario)
    const enlacesCategorias = screen.getAllByRole('link', { name: /Ver productos/ });

    // Assert
    expect(screen.getByText('Tu música merece el equipamiento adecuado')).toBeInTheDocument();
    expect(screen.getByText('Categorías Principales')).toBeInTheDocument();
    expect(screen.getByText('Taller de Reparación de Instrumentos de Cuerda')).toBeInTheDocument();
    expect(enlacesCategorias).toHaveLength(4);
    expect(enlacesCategorias[0]).toHaveAttribute('href', '/productos');
    expect(screen.getByRole('link', { name: /Cotizar Reparación por WhatsApp/ })).toHaveAttribute('href', expect.stringContaining('wa.me'));
  });
});