// Contenido de la página de inicio (separado del JSX para mantener los componentes cortos)

export const METRICAS = [
  { numero: '+11', texto: 'Años de trayectoria' },
  { numero: '340+', texto: 'Productos disponibles' },
  { numero: '100%', texto: 'Garantía y soporte' },
];

export const CATEGORIAS_HOME = [
  {
    imgSrc: '/img/guitarras.jpg',
    imgAlt: 'Guitarras eléctricas y acústicas',
    title: 'Guitarras y Bajos',
    description: 'Modelos eléctricos, acústicos, electroacústicos y accesorios.',
    linkTo: '/productos',
  },
  {
    imgSrc: '/img/teclados.jpg',
    imgAlt: 'Teclados',
    title: 'Teclados y Sintetizadores',
    description: 'Pianos digitales, controladores MIDI y teclados.',
    linkTo: '/productos',
  },
  {
    imgSrc: '/img/baterias.jpg',
    imgAlt: 'Baterías',
    title: 'Baterías y Percusión',
    description: 'Sets acústicos, baterías electrónicas, platillos.',
    linkTo: '/productos',
  },
  {
    imgSrc: '/img/audio.jpg',
    imgAlt: 'Audio',
    title: 'Audio y Amplificación',
    description: 'Amplificadores, micrófonos de estudio, pedales y cables.',
    linkTo: '/productos',
  },
];

export const AVISOS_TALLER = [
  {
    icono: '📍',
    titulo: 'Recepción Exclusivamente Presencial:',
    texto: 'El ingreso de instrumentos se realiza de forma presencial en nuestro local en Viña del Mar.',
    nota: 'No recibimos encomiendas ni envíos por Starken/Chilexpress para reparaciones.',
  },
  {
    icono: '🎸',
    titulo: 'Exclusivo Instrumentos de Cuerda:',
    texto: 'Atendemos exclusivamente guitarras, bajos y ukeleles.',
    nota: 'No realizamos servicio técnico de teclados, baterías ni amplificadores.',
  },
];

export const PROCESO_TALLER = [
  { icono: '🔍', titulo: 'Diagnóstico Gratuito', texto: 'Revisión inicial en mesón sin costo de evaluación.' },
  { icono: '⏱️', titulo: 'Entrega Estimada', texto: 'Calibraciones estándar listas en 48 a 72 horas hábiles.' },
];

export const SERVICIOS_TALLER = [
  'Calibración completa, octavación y ajuste de alma.',
  'Cambio de cuerdas, rectificado, coronado y pulido de trastes.',
  'Circuitos electrónicos, blindajes y cambio de cápsulas.',
];

export const WHATSAPP_REPARACION = 'https://wa.me/56900000000?text=Hola,%20necesito%20reparar...';