// Botón redondo para alternar entre tema claro y oscuro (muestra el ícono del tema al que se cambiará)
export default function ThemeToggle({ esClaro, onClick }) {
  const etiqueta = esClaro ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro';

  return (
    <button type="button" className="btn-tema" onClick={onClick} aria-label={etiqueta} title={etiqueta}>
      <span aria-hidden="true">{esClaro ? '🌙' : '☀️'}</span>
    </button>
  );
}