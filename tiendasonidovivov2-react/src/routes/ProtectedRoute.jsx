import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Sin sesión: redirige al login recordando a qué página quería entrar el usuario.
// Con soloAdmin: si hay sesión pero el usuario no es admin, lo manda a su perfil.
export default function ProtectedRoute({ soloAdmin = false }) {
  const { estaAutenticado, esAdmin } = useAuth();
  const location = useLocation();

  if (!estaAutenticado) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  if (soloAdmin && !esAdmin) {
    return <Navigate to="/perfil" replace />;
  }
  return <Outlet />;
}