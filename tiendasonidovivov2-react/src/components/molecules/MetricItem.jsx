// Una métrica destacada (número grande + texto)
export default function MetricItem({ numero, texto }) {
  return (
    <div className="metrica">
      <span className="metrica-numero">{numero}</span>
      <span className="metrica-texto">{texto}</span>
    </div>
  );
}