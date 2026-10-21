// Aviso importante del taller (icono + texto con nota en cursiva)
export default function NoticeItem({ icono, titulo, texto, nota }) {
  return (
    <div className="aviso-item">
      <span>{icono}</span>
      <p>
        <strong>{titulo}</strong> {texto} <em>{nota}</em>
      </p>
    </div>
  );
}
