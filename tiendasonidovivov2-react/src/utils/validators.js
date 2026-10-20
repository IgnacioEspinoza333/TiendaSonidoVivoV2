// Validadores puros: reciben un valor y devuelven '' si es válido o el mensaje de error.

const REGEX_NOMBRE = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;
const REGEX_RUT = /^[0-9]{7,8}-[0-9Kk]{1}$/;
const REGEX_USUARIO = /^[a-zA-Z0-9_.-]{4,}$/;
const REGEX_EMAIL = /^[\w.+-]+@(gmail\.com|outlook\.com|duocuc\.cl|hotmail\.com)$/i;

export const validarNombre = (valor = '') =>
  REGEX_NOMBRE.test(valor.trim()) ? '' : 'Ingresa un nombre válido (solo letras, mínimo 3)';

export const validarRut = (valor = '') =>
  REGEX_RUT.test(valor.trim()) ? '' : 'Formato incorrecto. Ej: 12345678-9';

export const validarUsuario = (valor = '') =>
  REGEX_USUARIO.test(valor.trim()) ? '' : 'El usuario debe tener al menos 4 caracteres (sin espacios)';

export const validarEmail = (valor = '') =>
  REGEX_EMAIL.test(valor.trim()) ? '' : 'Ingresa un correo válido (gmail, outlook, duocuc, hotmail)';

export const validarPassword = (valor = '') =>
  valor.trim().length >= 6 ? '' : 'La contraseña debe tener al menos 6 caracteres';

export const validarConfirmacion = (password = '', confirmacion = '') =>
  confirmacion.trim() !== '' && confirmacion.trim() === password.trim()
    ? ''
    : 'Las contraseñas no coinciden';

export const validarSeleccion = (valor = '', campo = 'una opción') =>
  valor ? '' : `Selecciona ${campo}`;

// Elimina las claves sin error para que { } signifique "formulario válido"
const soloErrores = (errores) =>
  Object.fromEntries(Object.entries(errores).filter(([, mensaje]) => mensaje));

export const validarLogin = ({ usuario, email, password }) =>
  soloErrores({
    usuario: validarUsuario(usuario),
    email: validarEmail(email),
    password: validarPassword(password),
  });

export const validarRegistro = (v) =>
  soloErrores({
    nombre: validarNombre(v.nombre),
    rut: validarRut(v.rut),
    usuario: validarUsuario(v.usuario),
    email: validarEmail(v.email),
    instrumento: validarSeleccion(v.instrumento, 'tu instrumento principal'),
    nivel: validarSeleccion(v.nivel, 'tu nivel de experiencia'),
    password: validarPassword(v.password),
    confirmarPassword: validarConfirmacion(v.password, v.confirmarPassword),
    terminos: v.terminos ? '' : 'Debes aceptar los Términos y Condiciones',
  });