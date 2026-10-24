// Botón para alternar entre modo oscuro y claro.
// Recibe el estado y la acción por props; no usa el contexto (igual que FavoriteButton)
export default function ThemeToggleButton({ esOscuro, onClick }) {
  return (
    <button
      type="button"
      id="boton-tema"
      onClick={onClick}
      aria-label="Modo oscuro"
      aria-pressed={esOscuro}
      title={esOscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      <span aria-hidden="true">{esOscuro ? '🌙' : '☀️'}</span>
    </button>
  );
}