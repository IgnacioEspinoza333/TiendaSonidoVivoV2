// Utilidades puras para mostrar datos del usuario (fáciles de probar con Vitest)

export const obtenerInicial = (nombre = '') => nombre.trim().charAt(0).toUpperCase() || '?';

export const etiquetaRol = (rol) => (rol === 'admin' ? 'Administrador' : 'Cliente');

// Une nombre y apellido (los usuarios antiguos solo tienen "nombre")
export const nombreCompleto = (usuario) =>
  [usuario?.nombre, usuario?.apellido].filter(Boolean).join(' ').trim();

// 'AAAA-MM-DD' -> 'DD/MM/AAAA' (si no hay fecha devuelve '')
export const formatearFecha = (fecha = '') => {
  const [anio, mes, dia] = fecha.split('-');
  return anio && mes && dia ? `${dia}/${mes}/${anio}` : '';
};