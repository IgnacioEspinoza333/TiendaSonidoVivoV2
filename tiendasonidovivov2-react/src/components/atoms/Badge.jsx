// Insignia de texto corto (por ejemplo el tipo de cuenta). variante: 'admin' | 'cliente'
export default function Badge({ children, variante = 'cliente' }) {
  return <span className={`insignia insignia-${variante}`}>{children}</span>;
}