import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Si no hay sesión, redirige al login recordando a qué página quería entrar el usuario
export default function ProtectedRoute() {
  const { estaAutenticado } = useAuth();
  const location = useLocation();

  if (!estaAutenticado) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return <Outlet />;
}