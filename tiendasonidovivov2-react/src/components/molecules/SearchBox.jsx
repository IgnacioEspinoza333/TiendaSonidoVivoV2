// Buscador de productos por nombre (input controlado)
export default function SearchBox({ value, onChange }) {
  return (
    <div className="buscador-productos">
      <span className="icono-buscar" aria-hidden="true">🔍</span>
      <input
        type="search"
        id="buscador-input"
        placeholder="Buscar producto..."
        aria-label="Buscar producto por nombre"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}