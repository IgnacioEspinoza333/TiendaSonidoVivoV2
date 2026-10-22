import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Hace scroll al ancla (#id) de la URL, o sube al inicio si no hay ancla.
// Se ejecuta en cada navegación, incluso al volver a pulsar el mismo enlace.
export default function ScrollToHash() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return undefined;
    }

    // Espera un instante para que la página nueva ya esté pintada
    const temporizador = setTimeout(() => {
      const elemento = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (elemento) elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);

    return () => clearTimeout(temporizador);
  }, [pathname, hash, key]);

  return null;
}