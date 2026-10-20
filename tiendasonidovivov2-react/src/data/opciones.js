// Opciones de contexto musical usadas en el registro (y luego en el perfil)
export const INSTRUMENTOS = [
  'Guitarra',
  'Bajo',
  'Teclado / Piano',
  'Batería y percusión',
  'Canto / Producción',
  'Otro',
];

export const NIVELES = ['Principiante', 'Intermedio', 'Avanzado', 'Profesional'];

// Opciones del checkout
export const FORMAS_PAGO = [
  { valor: 'debito', etiqueta: 'Débito' },
  { valor: 'credito', etiqueta: 'Crédito' },
];

export const TIPOS_ENTREGA = [
  { valor: 'retiro', etiqueta: 'Retiro en tienda' },
  { valor: 'despacho', etiqueta: 'Despacho a domicilio' },
];

export const REGIONES = [
  'Arica y Parinacota',
  'Tarapacá',
  'Antofagasta',
  'Atacama',
  'Coquimbo',
  'Valparaíso',
  'Metropolitana de Santiago',
  "Libertador General Bernardo O'Higgins",
  'Maule',
  'Ñuble',
  'Biobío',
  'La Araucanía',
  'Los Ríos',
  'Los Lagos',
  'Aysén',
  'Magallanes y de la Antártica Chilena',
];

// Opciones del panel de control y del catálogo
export const CATEGORIAS = ['Guitarras', 'Bajos', 'Teclados', 'Baterías', 'Audio'];

// Imagen genérica para productos creados desde el panel (no se suben archivos reales)
export const IMAGEN_POR_DEFECTO = '/img/musica.jfif';

// Filtros del catálogo: cada botón puede agrupar varias categorías
export const FILTROS_CATALOGO = [
  { valor: 'todos', etiqueta: 'Todos', categorias: null },
  { valor: 'guitarras', etiqueta: 'Guitarras y Bajos', categorias: ['guitarras', 'bajos'] },
  { valor: 'teclados', etiqueta: 'Teclados', categorias: ['teclados'] },
  { valor: 'baterias', etiqueta: 'Baterías', categorias: ['baterias'] },
  { valor: 'audio', etiqueta: 'Audio y Amplificación', categorias: ['audio'] },
];