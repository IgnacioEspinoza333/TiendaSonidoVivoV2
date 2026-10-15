import { createContext, useState, useEffect, useContext } from 'react';

// Creamos el contexto
export const CartContext = createContext();

// Hook personalizado para usar el carrito fácilmente
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  // Inicializamos el estado leyendo el localStorage (como en tu legacy)
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('carritoSonidoVivo');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  // Cada vez que el carrito cambie, lo guardamos en localStorage automáticamente
  useEffect(() => {
    localStorage.setItem('carritoSonidoVivo', JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto, cantidad) => {
    setCarrito((prevCarrito) => {
      const itemExistente = prevCarrito.find((item) => item.id === producto.id);
      if (itemExistente) {
        return prevCarrito.map((item) => 
          item.id === producto.id ? { ...item, cantidad: item.cantidad + cantidad } : item
        );
      }
      return [...prevCarrito, { 
        id: producto.id, 
        nombre: producto.nombre, 
        precio: Number(producto.precio.toString().replace('.', '')), // Aseguramos formato numérico
        imagen: producto.imagen, 
        cantidad 
      }];
    });
    alert(`¡Se agregaron ${cantidad} unidad(es) de "${producto.nombre}" al carrito!`);
  };

  const actualizarCantidad = (id, cantidad) => {
    if (cantidad < 1) return;
    setCarrito((prev) => prev.map((item) => item.id === id ? { ...item, cantidad } : item));
  };

  const eliminarProducto = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    if (window.confirm('¿Estás seguro de que deseas vaciar todo el carrito?')) {
      setCarrito([]);
    }
  };

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, actualizarCantidad, eliminarProducto, vaciarCarrito }}>
      {children}
    </CartContext.Provider>
  );
}