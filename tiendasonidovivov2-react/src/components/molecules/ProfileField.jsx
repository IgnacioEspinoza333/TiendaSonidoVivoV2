// Un dato del perfil: etiqueta + valor (muestra "—" si no existe)
export default function ProfileField({ etiqueta, valor }) {
  return (
    <div className="campo-perfil">
      <dt className="campo-perfil-etiqueta">{etiqueta}</dt>
      <dd className="campo-perfil-valor">{valor || '—'}</dd>
    </div>
  );
}