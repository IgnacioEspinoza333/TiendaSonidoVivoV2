// Pone primero los productos favoritos. Dentro de cada grupo se respeta el orden original.
export const ordenarFavoritosPrimero = (productos, favoritos) => [
  ...productos.filter((producto) => favoritos.includes(producto.id)),
  ...productos.filter((producto) => !favoritos.includes(producto.id)),
];