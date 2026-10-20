import { useState } from 'react';

// Maneja valores, envío y errores de un formulario controlado.
// Los errores se muestran recién después del primer intento de envío y luego se actualizan en vivo.
export default function useForm(valoresIniciales, validar) {
  const [values, setValues] = useState(valoresIniciales);
  const [enviado, setEnviado] = useState(false);

  const errors = enviado ? validar(values) : {};

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setValues((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (onValid) => (e) => {
    e.preventDefault();
    setEnviado(true);
    if (Object.keys(validar(values)).length === 0) onValid(values);
  };

  // Deja el formulario como nuevo (valores iniciales y sin errores)
  const reset = () => {
    setValues(valoresIniciales);
    setEnviado(false);
  };

  return { values, errors, enviado, handleChange, handleSubmit, reset };
}