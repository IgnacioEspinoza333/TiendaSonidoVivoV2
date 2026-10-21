import { screen, fireEvent } from '@testing-library/react';
import { renderConProviders } from '../../testUtils';
import CheckoutForm from './CheckoutForm';

describe('CheckoutForm', () => {
  it('PU-17: los campos de región y dirección aparecen solo con despacho a domicilio', () => {
    // Arrange
    renderConProviders(<CheckoutForm onConfirmar={vi.fn()} />);

    // Act + Assert (estado inicial: retiro en tienda)
    expect(screen.queryByLabelText('Región:')).not.toBeInTheDocument();

    // Act
    fireEvent.click(screen.getByLabelText('Despacho a domicilio'));

    // Assert
    expect(screen.getByLabelText('Región:')).toBeInTheDocument();
    expect(screen.getByLabelText('Dirección de despacho:')).toBeInTheDocument();

    // Act
    fireEvent.click(screen.getByLabelText('Retiro en tienda'));

    // Assert
    expect(screen.queryByLabelText('Región:')).not.toBeInTheDocument();
  });
});