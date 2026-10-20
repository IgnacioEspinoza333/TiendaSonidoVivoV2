// Campo numérico de cantidad (1 a 10) usado en la tabla del carrito
export default function QuantityInput({ value, onChange, min = 1, max = 10 }) {
  return (
    <input
      type="number"
      className="input-cantidad"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(Math.min(max, parseInt(e.target.value, 10) || min))}
    />
  );
}