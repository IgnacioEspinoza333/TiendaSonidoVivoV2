// Servicio de autenticación (sin backend): credenciales estáticas + usuarios registrados en localStorage.

export const CLAVE_USUARIOS = 'usuariosSonidoVivo';
export const CLAVE_SESION = 'usuarioActivo';
export const CLAVE_RECORDADO = 'usuarioRecordado';

// Credenciales estáticas pedidas por la evaluación
export const USUARIOS_ESTATICOS = [
  {
    nombre: 'Administrador Sonido Vivo',
    rut: '11111111-1',
    usuario: 'admin',
    email: 'admin@duocuc.cl',
    password: 'admin123',
    instrumento: 'Guitarra',
    nivel: 'Profesional',
    rol: 'admin',
  },
  {
    nombre: 'Cliente Demo',
    rut: '22222222-2',
    usuario: 'cliente',
    email: 'cliente@gmail.com',
    password: 'cliente123',
    instrumento: 'Teclado / Piano',
    nivel: 'Intermedio',
    rol: 'cliente',
  },
];

const leerJSON = (clave, porDefecto) => {
  try {
    const crudo = localStorage.getItem(clave);
    return crudo ? JSON.parse(crudo) : porDefecto;
  } catch {
    return porDefecto;
  }
};

// Nunca guardamos la contraseña dentro de la sesión
const sinPassword = (usuario) => {
  const publico = { ...usuario };
  delete publico.password;
  return publico;
};

export const obtenerUsuariosRegistrados = () => leerJSON(CLAVE_USUARIOS, []);

const mismo = (a = '', b = '') => a.trim().toLowerCase() === b.trim().toLowerCase();

export function verificarCredenciales({ usuario, email, password }) {
  const todos = [...USUARIOS_ESTATICOS, ...obtenerUsuariosRegistrados()];
  const encontrado = todos.find(
    (u) => mismo(u.usuario, usuario) && mismo(u.email, email) && u.password === password.trim()
  );
  return encontrado ? sinPassword(encontrado) : null;
}

export function registrarUsuario(datos) {
  const existentes = [...USUARIOS_ESTATICOS, ...obtenerUsuariosRegistrados()];

  if (existentes.some((u) => mismo(u.usuario, datos.usuario))) {
    return { ok: false, error: 'Ese nombre de usuario ya está en uso.' };
  }
  if (existentes.some((u) => mismo(u.email, datos.email))) {
    return { ok: false, error: 'Ese correo ya está registrado.' };
  }

  const nuevo = {
    nombre: datos.nombre.trim(),
    apellido: (datos.apellido || '').trim(),
    rut: datos.rut.trim(),
    usuario: datos.usuario.trim(),
    email: datos.email.trim().toLowerCase(),
    fechaNacimiento: datos.fechaNacimiento || '',
    password: datos.password.trim(),
    instrumento: datos.instrumento,
    nivel: datos.nivel,
    rol: 'cliente',
  };
  localStorage.setItem(CLAVE_USUARIOS, JSON.stringify([...obtenerUsuariosRegistrados(), nuevo]));
  return { ok: true, usuario: sinPassword(nuevo) };
}

export const obtenerSesion = () => leerJSON(CLAVE_SESION, null);
export const guardarSesion = (usuario) => localStorage.setItem(CLAVE_SESION, JSON.stringify(usuario));
export const borrarSesion = () => localStorage.removeItem(CLAVE_SESION);

// "Recordarme": solo recuerda el nombre de usuario para precargarlo en el login
export const obtenerUsuarioRecordado = () => localStorage.getItem(CLAVE_RECORDADO) || '';
export const guardarUsuarioRecordado = (usuario, recordar) => {
  if (recordar) localStorage.setItem(CLAVE_RECORDADO, usuario.trim());
  else localStorage.removeItem(CLAVE_RECORDADO);
};