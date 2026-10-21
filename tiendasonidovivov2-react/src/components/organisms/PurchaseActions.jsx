import { useState, useEffect } from 'react';

// Botones de compra. El aviso de WhatsApp se muestra 3 segundos y desaparece solo.
export default function PurchaseActions({ onAgregar, onComprarAhora }) {
  const [mensajeWsp, setMensajeWsp] = useState(false);

  useEffect(() => {
    if (!mensajeWsp) return undefined;
    const temporizador = setTimeout(() => setMensajeWsp(false), 3000);
    return () => clearTimeout(temporizador);
  }, [mensajeWsp]);

  return (
    <div className="acciones-compra">
      <button type="button" className="btn-comprar btn-rojo" onClick={onAgregar}>
        🛒 Añadir al Carrito
      </button>
      <button type="button" className="btn-comprar btn-oscuro" onClick={onComprarAhora}>
        Comprar Ahora
      </button>
      <button type="button" className="btn-comprar btn-verde" onClick={() => setMensajeWsp(true)}>
        Cotizar por WhatsApp
      </button>

      {mensajeWsp && (
        <p className="mensaje-confirmacion">¡Redirigiendo a WhatsApp de Sonido Vivo!</p>
      )}
    </div>
  );
}