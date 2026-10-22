import Avatar from '../atoms/Avatar';
import Badge from '../atoms/Badge';
import { etiquetaRol, nombreCompleto } from '../../utils/userUtils';

// Cabecera del perfil: avatar, nombre, usuario y tipo de cuenta
export default function ProfileHeader({ usuario }) {
  return (
    <div className="perfil-cabecera">
      <Avatar nombre={usuario.nombre} />
      <div>
        <h3 className="perfil-nombre">{nombreCompleto(usuario)}</h3>
        <p className="perfil-usuario">@{usuario.usuario}</p>
        <Badge variante={usuario.rol === 'admin' ? 'admin' : 'cliente'}>{etiquetaRol(usuario.rol)}</Badge>
      </div>
    </div>
  );
}