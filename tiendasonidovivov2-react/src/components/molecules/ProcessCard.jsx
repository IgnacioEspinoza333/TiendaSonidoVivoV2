// Tarjeta de un paso del proceso de reparación
export default function ProcessCard({ icono, titulo, texto }) {
  return (
    <div className="tarjeta-proceso">
      <span className="icono-proceso">{icono}</span>
      <h4>{titulo}</h4>
      <p>{texto}</p>
    </div>
  );
}