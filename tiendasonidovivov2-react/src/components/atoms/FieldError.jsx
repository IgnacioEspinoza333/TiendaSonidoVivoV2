// Mensaje de error de un campo (usa la clase original .mensaje-error)
export default function FieldError({ mensaje }) {
  if (!mensaje) return null;
  return <span className="mensaje-error">❌ {mensaje}</span>;
}