import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import ProtectedRoute from './ProtectedRoute';

// Renderiza /perfil dentro de una ruta protegida; /login es la pantalla de destino
const renderRutaProtegida = () =>
  render(
    <MemoryRouter initialEntries={['/perfil']}>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<p>Pantalla de login</p>} />
          <Route element={<ProtectedRoute />}>
            <Route path="/perfil" element={<p>Contenido privado</p>} />
          </Route>
        </Routes>
      </AuthProvider>
    </MemoryRouter>
  );

describe('ProtectedRoute', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('PU-20: sin sesión redirige al login y no muestra el contenido privado', () => {
    // Arrange (localStorage vacío: no hay sesión)

    // Act
    renderRutaProtegida();

    // Assert
    expect(screen.getByText('Pantalla de login')).toBeInTheDocument();
    expect(screen.queryByText('Contenido privado')).not.toBeInTheDocument();
  });

  it('PU-21: con sesión guardada en localStorage muestra el contenido privado', () => {
    // Arrange
    localStorage.setItem('usuarioActivo', JSON.stringify({ usuario: 'admin', rol: 'admin' }));

    // Act
    renderRutaProtegida();

    // Assert
    expect(screen.getByText('Contenido privado')).toBeInTheDocument();
    expect(screen.queryByText('Pantalla de login')).not.toBeInTheDocument();
  });
});