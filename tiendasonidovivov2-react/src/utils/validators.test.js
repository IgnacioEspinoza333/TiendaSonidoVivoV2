import {
  validarEmail, validarRut, validarLogin, validarRegistro,
  validarCheckout, calcularEdad, validarFechaNacimiento,
} from './validators';

describe('validators', () => {
  it('PU-01: acepta correos de dominios permitidos y rechaza otros', () => {
    // Arrange
    const permitido = 'cliente@gmail.com';
    const noPermitido = 'cliente@yahoo.com';

    // Act
    const resultadoPermitido = validarEmail(permitido);
    const resultadoNoPermitido = validarEmail(noPermitido);

    // Assert
    expect(resultadoPermitido).toBe('');
    expect(resultadoNoPermitido).not.toBe('');
  });

  it('PU-02: valida el formato del RUT (sin puntos y con guion)', () => {
    // Arrange
    const correcto = '12345678-9';
    const sinGuion = '123456789';

    // Act
    const resultadoCorrecto = validarRut(correcto);
    const resultadoSinGuion = validarRut(sinGuion);

    // Assert
    expect(resultadoCorrecto).toBe('');
    expect(resultadoSinGuion).toBe('Formato incorrecto. Ej: 12345678-9');
  });

  it('PU-03: el login vacío reporta 3 errores y el válido ninguno', () => {
    // Arrange
    const vacio = { usuario: '', email: '', password: '' };
    const valido = { usuario: 'admin', email: 'admin@duocuc.cl', password: 'admin123' };

    // Act
    const erroresVacio = validarLogin(vacio);
    const erroresValido = validarLogin(valido);

    // Assert
    expect(Object.keys(erroresVacio)).toEqual(['usuario', 'email', 'password']);
    expect(erroresValido).toEqual({});
  });

  it('PU-04: el registro exige coincidir contraseñas y elegir instrumento', () => {
    // Arrange
    const datos = {
      nombre: 'Juan Pérez', rut: '12345678-9', usuario: 'jperez', email: 'jp@gmail.com',
      instrumento: '', nivel: 'Principiante',
      password: 'abc123', confirmarPassword: 'otra123',
    };

    // Act
    const errores = validarRegistro(datos);

    // Assert
    expect(errores).toHaveProperty('confirmarPassword');
    expect(errores).toHaveProperty('instrumento');
    expect(errores).not.toHaveProperty('nivel');
  });
  
  it('PU-05: el checkout con retiro en tienda no exige dirección ni región', () => {
    // Arrange
    const datos = {
      nombre: 'Juan', apellido: 'Pérez', rut: '12345678-9', email: 'jp@gmail.com', fono: '+56912345678',
      fenac: '2000-05-10', entrega: 'retiro', region: '', direccion: '', fdepago: 'debito',
    };

    // Act
    const errores = validarCheckout(datos);

    // Assert
    expect(errores).toEqual({});
  });

  it('PU-06: el checkout con despacho exige región y dirección', () => {
    // Arrange
    const datos = {
      nombre: 'Juan', apellido: 'Pérez', rut: '12345678-9', email: 'jp@gmail.com', fono: '+56912345678',
      fenac: '2000-05-10', entrega: 'despacho', region: '', direccion: '', fdepago: 'debito',
    };

    // Act
    const errores = validarCheckout(datos);

    // Assert
    expect(Object.keys(errores)).toEqual(['region', 'direccion']);
  });

  it('PU-07: calcula la edad y rechaza a menores de 18 años', () => {
    // Arrange
    const hoy = new Date(2026, 5, 15); // 15 de junio de 2026
    const cumpleManana = '2000-06-16';
    const cumpleHoy = '2000-06-15';

    // Act
    const edadAntes = calcularEdad(cumpleManana, hoy);
    const edadHoy = calcularEdad(cumpleHoy, hoy);
    const errorMenor = validarFechaNacimiento('2015-01-01');

    // Assert
    expect(edadAntes).toBe(25);
    expect(edadHoy).toBe(26);
    expect(errorMenor).toBe('Debes ser mayor de 18 años');
  });
});