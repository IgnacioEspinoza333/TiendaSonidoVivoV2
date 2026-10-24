import { createContext, useState, useEffect, useContext } from 'react';

const CLAVE_TEMA = 'temaSonidoVivo';

export const ThemeContext = createContext();

// Hook personalizado para usar el tema fácilmente
export const useTheme = () => useContext(ThemeContext);

// Lee el tema guardado; solo acepta 'light'. Cualquier otro caso (vacío o dato dañado) parte en oscuro
const leerTema = () => {
  try {
    return localStorage.getItem(CLAVE_TEMA) === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
};

export function ThemeProvider({ children }) {
  // El tema puede ser 'dark' (por defecto) o 'light'
  const [tema, setTema] = useState(leerTema);

  // Cada vez que cambia: se escribe en <html data-theme="..."> y se guarda en localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema);
    localStorage.setItem(CLAVE_TEMA, tema);
  }, [tema]);

  const esOscuro = tema === 'dark';

  // Si estaba oscuro pasa a claro, y al revés
  const alternarTema = () => {
    setTema((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ tema, esOscuro, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}