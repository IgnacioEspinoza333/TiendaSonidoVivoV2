import { screen, fireEvent } from '@testing-library/react';
import { renderConProviders } from '../../testUtils';
import RegisterForm from './RegisterForm';

describe('RegisterForm', () => {
  it('PU-16: al enviar vacío exige instrumento y nivel', () => {
    // Arrange
    renderConProviders(<RegisterForm />);

    // Act
    fireEvent.click(screen.getByRole('button', { name: 'Crear Cuenta' }));

    // Assert
    expect(screen.getByText(/Selecciona tu instrumento principal/)).toBeInTheDocument();
    expect(screen.getByText(/Selecciona tu nivel de experiencia/)).toBeInTheDocument();
  });
});