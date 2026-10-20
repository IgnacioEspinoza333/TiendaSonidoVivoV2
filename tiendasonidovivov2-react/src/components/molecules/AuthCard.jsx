// Tarjeta contenedora de login/registro: título, subtítulo, formulario y pie con enlace
export default function AuthCard({ titulo, subtitulo, pie, ancha = false, children }) {
  return (
    <div className={`contenedor-auth ${ancha ? 'contenedor-auth-ancho' : ''}`}>
      <div className="caja-auth">
        <h2>{titulo}</h2>
        <p className="subtitulo-auth">{subtitulo}</p>
        {children}
        <div className="pie-card-auth">{pie}</div>
      </div>
    </div>
  );
}