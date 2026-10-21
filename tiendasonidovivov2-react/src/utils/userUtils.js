// Utilidades puras para mostrar datos del usuario (fáciles de probar con Vitest)

export const obtenerInicial = (nombre = '') => nombre.trim().charAt(0).toUpperCase() || '?';

export const etiquetaRol = (rol) => (rol === 'admin' ? 'Administrador' : 'Cliente');