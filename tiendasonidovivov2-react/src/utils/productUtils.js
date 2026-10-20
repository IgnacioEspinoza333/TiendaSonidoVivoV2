import { IMAGEN_POR_DEFECTO } from '../data/opciones';

// Minúsculas y sin tildes: "Baterías" y "Baterias" se tratan igual
export const normalizar = (texto = '') =>
  texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

// Los precios se guardan como texto con puntos de miles ("349.990")
export const formatearPrecio = (numero) => numero.toLocaleString('es-CL');
export const precioANumero = (precio) => Number(String(precio).replace(/\./g, ''));

export const coincideFiltro = (producto, filtro) =>
  !filtro?.categorias || filtro.categorias.includes(normalizar(producto.categoria));

export const filtrarProductos = (productos, filtro, busqueda = '') =>
  productos.filter(
    (producto) =>
      coincideFiltro(producto, filtro) &&
      normalizar(producto.nombre).includes(normalizar(busqueda.trim()))
  );

export const siguienteId = (productos) => Math.max(0, ...productos.map((p) => p.id)) + 1;

// Convierte los datos del formulario en un producto del catálogo
export const crearProducto = (datos, id) => ({
  id,
  nombre: datos.nombre.trim(),
  categoria: datos.categoria,
  marca: datos.marca.trim(),
  precio: formatearPrecio(Number(datos.precio)),
  stock: Number(datos.stock),
  descripcion: datos.descripcion.trim(),
  imagen: IMAGEN_POR_DEFECTO,
});