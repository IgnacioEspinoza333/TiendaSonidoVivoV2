import { createContext, useState, useEffect, useContext } from 'react';

const CLAVE_FAVORITOS = 'favoritosSonidoVivo';

export const FavoritesContext = createContext();

// Hook personalizado para usar los favoritos fácilmente
export const useFavorites = () => useContext(FavoritesContext);

// Lee los ids guardados; si no hay nada o el dato está dañado, parte con lista vacía
const leerFavoritos = () => {
  try {
    const guardados = JSON.parse(localStorage.getItem(CLAVE_FAVORITOS));
    return Array.isArray(guardados) ? guardados : [];
  } catch {
    return [];
  }
};

export function FavoritesProvider({ children }) {
  // Guardamos solo los ids de los productos favoritos
  const [favoritos, setFavoritos] = useState(leerFavoritos);

  // Cada vez que cambian, se guardan en localStorage
  useEffect(() => {
    localStorage.setItem(CLAVE_FAVORITOS, JSON.stringify(favoritos));
  }, [favoritos]);

  const esFavorito = (id) => favoritos.includes(id);

  // Si ya es favorito lo quita; si no, lo agrega
  const alternarFavorito = (id) => {
    setFavoritos((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));
  };

  return (
    <FavoritesContext.Provider value={{ favoritos, esFavorito, alternarFavorito }}>
      {children}
    </FavoritesContext.Provider>
  );
}