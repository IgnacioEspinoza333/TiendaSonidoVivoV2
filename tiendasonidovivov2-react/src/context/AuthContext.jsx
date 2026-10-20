import { createContext, useState, useContext, useCallback } from 'react';
import {
  obtenerSesion,
  guardarSesion,
  borrarSesion,
  verificarCredenciales,
  registrarUsuario,
} from '../services/authService';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  // La sesión se restaura desde localStorage al cargar la app
  const [usuario, setUsuario] = useState(() => obtenerSesion());

  const iniciarSesion = useCallback((usuarioValido) => {
    guardarSesion(usuarioValido);
    setUsuario(usuarioValido);
  }, []);

  const cerrarSesion = useCallback(() => {
    borrarSesion();
    setUsuario(null);
  }, []);

  const value = {
    usuario,
    estaAutenticado: Boolean(usuario),
    esAdmin: usuario?.rol === 'admin',
    verificarCredenciales,
    registrarUsuario,
    iniciarSesion,
    cerrarSesion,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}