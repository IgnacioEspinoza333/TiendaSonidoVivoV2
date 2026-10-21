import { verificarCredenciales, registrarUsuario } from './authService';

describe('authService', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('PU-11: inicia sesión con credenciales estáticas y rechaza una clave incorrecta', () => {
    // Arrange
    const correctas = { usuario: 'admin', email: 'admin@duocuc.cl', password: 'admin123' };
    const incorrectas = { usuario: 'admin', email: 'admin@duocuc.cl', password: 'equivocada' };

    // Act
    const usuario = verificarCredenciales(correctas);
    const rechazado = verificarCredenciales(incorrectas);

    // Assert
    expect(usuario.rol).toBe('admin');
    expect(usuario).not.toHaveProperty('password');
    expect(rechazado).toBeNull();
  });

  it('PU-12: registra un usuario, permite entrar con él y rechaza duplicados', () => {
    // Arrange
    const datos = {
      nombre: 'Juan Pérez', rut: '12345678-9', usuario: 'jperez', email: 'jp@gmail.com',
      instrumento: 'Bajo', nivel: 'Principiante', password: 'abc123',
    };

    // Act
    const primerRegistro = registrarUsuario(datos);
    const sesion = verificarCredenciales({ usuario: 'jperez', email: 'jp@gmail.com', password: 'abc123' });
    const duplicado = registrarUsuario(datos);

    // Assert
    expect(primerRegistro.ok).toBe(true);
    expect(sesion.instrumento).toBe('Bajo');
    expect(duplicado.ok).toBe(false);
    expect(duplicado.error).toMatch(/ya está en uso/);
  });
});