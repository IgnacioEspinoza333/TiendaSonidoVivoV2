import { Link, useLocation } from 'react-router-dom';

export default function NavLink({ to, children }) {
  const { pathname, hash } = useLocation();
  const [ruta, ancla = ''] = to.split('#');
  const activo = pathname === ruta && hash === (ancla ? `#${ancla}` : '');

  return (
    <li>
      <Link to={to} className={activo ? 'activo' : undefined}>{children}</Link>
    </li>
  );
}