// Selector de cantidad (1 a 10) con el total calculado
export default function QuantitySelector({ cantidad, onCantidad, total }) {
  return (
    <div className="selector-compra">
      <div className="cantidad-contenedor">
        <label htmlFor="cantidad">Cantidad:</label>
        <input
          type="number"
          id="cantidad"
          min="1"
          max="10"
          value={cantidad}
          onChange={(e) => onCantidad(Math.max(1, parseInt(e.target.value, 10) || 1))}
        />
      </div>
      <div className="total-calculado">
        Total: <strong>${total}</strong>
      </div>
    </div>
  );
}