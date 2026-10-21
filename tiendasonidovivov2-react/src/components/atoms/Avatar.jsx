import { obtenerInicial } from '../../utils/userUtils';

// Círculo con la inicial del nombre (no se usan fotos reales)
export default function Avatar({ nombre }) {
  return (
    <div className="avatar-perfil" aria-hidden="true">
      {obtenerInicial(nombre)}
    </div>
  );
}