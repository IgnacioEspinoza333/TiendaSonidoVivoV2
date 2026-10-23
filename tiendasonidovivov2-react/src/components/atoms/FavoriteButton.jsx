// Botón de corazón para marcar o quitar un producto de favoritos
export default function FavoriteButton({ activo, onClick, conTexto = false }) {
  const etiqueta = activo ? 'Quitar de favoritos' : 'Agregar a favoritos';

  return (
    <button
      type="button"
      className={`btn-favorito ${activo ? 'favorito-activo' : ''} ${conTexto ? 'con-texto' : ''}`}
      onClick={onClick}
      aria-pressed={activo}
      aria-label={etiqueta}
      title={etiqueta}
    >
      <span aria-hidden="true">{activo ? '♥' : '♡'}</span>
      {conTexto && <span aria-hidden="true">{activo ? 'En favoritos' : 'Agregar a favoritos'}</span>}
    </button>
  );
}