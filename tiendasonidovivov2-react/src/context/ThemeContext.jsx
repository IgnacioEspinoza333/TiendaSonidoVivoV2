import { createContext, useState, useEffect, useContext, useCallback } from 'react';

export const CLAVE_TEMA = 'temaSonidoVivo';

export const ThemeContext = createContext();

// Hook personalizado para usar el tema fácilmente
export const useTheme = () => useContext(ThemeContext);

// Lee el tema guardado; si no hay nada (o el dato no es válido) usa el oscuro, que es el diseño original
const leerTema = () => {
  try {
    return localStorage.getItem(CLAVE_TEMA) === 'claro' ? 'claro' : 'oscuro';
  } catch {
    return 'oscuro';
  }
};

export function ThemeProvider({ children }) {
  const [tema, setTema] = useState(leerTema);

  // Cada vez que cambia el tema: se marca en <html> (ahí actúan las variables CSS) y se guarda
  useEffect(() => {
    document.documentElement.setAttribute('data-tema', tema);
    localStorage.setItem(CLAVE_TEMA, tema);
  }, [tema]);

  const alternarTema = useCallback(() => {
    setTema((anterior) => (anterior === 'oscuro' ? 'claro' : 'oscuro'));
  }, []);

  return (
    <ThemeContext.Provider value={{ tema, esClaro: tema === 'claro', alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}