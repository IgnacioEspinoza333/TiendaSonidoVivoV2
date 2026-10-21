// Encabezado de sección: etiqueta pequeña + título + subtítulo opcional
export default function SectionHeading({ etiqueta, titulo, subtitulo }) {
  return (
    <>
      <span className="etiqueta">{etiqueta}</span>
      <h2>{titulo}</h2>
      {subtitulo && <p className="subtitulo-seccion">{subtitulo}</p>}
    </>
  );
}