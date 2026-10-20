// Utilidades puras del carrito (fáciles de probar con Vitest)

export const formatoCLP = (monto) => `$${monto.toLocaleString('es-CL')}`;

export const calcularSubtotal = ({ precio, cantidad }) => precio * cantidad;

export const calcularTotal = (carrito) =>
  carrito.reduce((acumulado, item) => acumulado + calcularSubtotal(item), 0);

export const contarUnidades = (carrito) =>
  carrito.reduce((acumulado, item) => acumulado + item.cantidad, 0);