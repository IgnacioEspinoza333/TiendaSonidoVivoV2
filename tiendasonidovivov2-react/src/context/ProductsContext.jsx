import { createContext, useState, useContext } from 'react';
import { productsData } from '../data/products';
import { crearProducto, siguienteId } from '../utils/productUtils';
import { crearProducto, siguienteId, actualizarDatosProducto } from '../utils/productUtils';

export const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export function ProductsProvider({ children }) {
  // CRUD en memoria: parte del catálogo base y los cambios viven solo mientras la app está abierta
  const [productos, setProductos] = useState(productsData);

  // CREATE
  const agregarProducto = (datos) => {
    const nuevo = crearProducto(datos, siguienteId(productos));
    setProductos((prev) => [...prev, nuevo]);
    return nuevo;
  };

  // UPDATE
  const actualizarProducto = (id, datos) => {
    setProductos((prev) =>
      prev.map((producto) => (producto.id === id ? actualizarDatosProducto(producto, datos) : producto))
    );
  };

  // DELETE
  const eliminarProducto = (id) => {
    setProductos((prev) => prev.filter((producto) => producto.id !== id));
  };

  return (
    <ProductsContext.Provider value={{ productos, agregarProducto, actualizarProducto, eliminarProducto }}>
      {children}
    </ProductsContext.Provider>
  );
}