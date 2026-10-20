// Mensaje de éxito mostrado tras enviar un formulario correctamente
export default function SuccessMessage({ children, id }) {
  return (
    <p id={id} className="mensaje-oculto mensaje-visible" role="status">
      {children}
    </p>
  );
}