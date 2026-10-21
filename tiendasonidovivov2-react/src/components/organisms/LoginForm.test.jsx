import { screen, fireEvent } from '@testing-library/react';
import { renderConProviders } from '../../testUtils';
import LoginForm from './LoginForm';

const llenarLogin = (usuario, email, password) => {
  fireEvent.change(screen.getByLabelText('Nombre de usuario:'), { target: { value: usuario } });
  fireEvent.change(screen.getByLabelText('Correo electrónico:'), { target: { value: email } });
  fireEvent.change(screen.getByLabelText('Contraseña:'), { target: { value: password } });
};

describe('LoginForm', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('PU-13: al enviar vacío muestra los mensajes de error de cada campo', () => {
    // Arrange
    renderConProviders(<LoginForm />);

    // Act
    fireEvent.click(screen.getByRole('button', { name: 'Ingresar' }));

    // Assert
    expect(screen.getByText(/El usuario debe tener al menos 4 caracteres/)).toBeInTheDocument();
    expect(screen.getByText(/Ingresa un correo válido/)).toBeInTheDocument();
    expect(screen.getByText(/al menos 6 caracteres/)).toBeInTheDocument();
  });

  it('PU-14: con credenciales que no existen muestra un error general', () => {
    // Arrange
    renderConProviders(<LoginForm />);
    llenarLogin('inexistente', 'nadie@gmail.com', 'clave123');

    // Act
    fireEvent.click(screen.getByRole('button', { name: 'Ingresar' }));

    // Assert
    expect(screen.getByText(/Usuario, correo o contraseña incorrectos/)).toBeInTheDocument();
  });

  it('PU-15: con las credenciales del admin muestra el mensaje de éxito', () => {
    // Arrange
    renderConProviders(<LoginForm />);
    llenarLogin('admin', 'admin@duocuc.cl', 'admin123');

    // Act
    fireEvent.click(screen.getByRole('button', { name: 'Ingresar' }));

    // Assert
    expect(screen.getByText(/¡Inicio de sesión exitoso!/)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Ingresar' })).not.toBeInTheDocument();
  });
});