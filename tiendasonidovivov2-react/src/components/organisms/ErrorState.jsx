// Pantalla de error reutilizable: código grande, título, mensaje y botones (children)
export default function ErrorState({ codigo, titulo, mensaje, children }) {
  return (
    <div className="estado-error">
      <span className="estado-error-codigo">{codigo}</span>
      <h2>{titulo}</h2>
      <p className="estado-error-mensaje">{mensaje}</p>
      <div className="estado-error-acciones">{children}</div>
    </div>
  );
}