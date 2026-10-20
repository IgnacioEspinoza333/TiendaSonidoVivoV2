// Botones de filtro por categoría del catálogo
export default function CategoryFilterBar({ filtros, activo, onChange }) {
  return (
    <div className="barra-filtros" role="group" aria-label="Filtrar por categoría">
      {filtros.map(({ valor, etiqueta }) => (
        <button
          key={valor}
          type="button"
          className={`filtro-boton ${activo === valor ? 'activo' : ''}`}
          onClick={() => onChange(valor)}
        >
          {etiqueta}
        </button>
      ))}
    </div>
  );
}