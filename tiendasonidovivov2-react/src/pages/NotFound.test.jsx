import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound', () => {
  it('PU-25: muestra el error 404 con la dirección inexistente y enlaces de regreso', () => {
    // Arrange
    render(
      <MemoryRouter initialEntries={['/ruta/inexistente']}>
        <NotFound />
      </MemoryRouter>
    );

    // Act (la página se muestra al renderizar; no requiere acción del usuario)

    // Assert
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText(/\/ruta\/inexistente/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Volver al inicio' })).toHaveAttribute('href', '/');
  });
});