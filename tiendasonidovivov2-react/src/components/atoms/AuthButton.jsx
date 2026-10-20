// Botón principal de formularios de autenticación (.btn-auth)
export default function AuthButton({ children, id }) {
  return (
    <button type="submit" className="btn-auth" id={id}>
      {children}
    </button>
  );
}