# TiendaSonidoVivoV2
Tienda Sonido Vivo Versión 2

# Páginas:
  - Index (Inicio)
      - *Falta Migrar*
  - Productos
      - *Falta Migrar*
  - Producto
      - *Falta Migrar*
  - Login
      - *Falta Migrar*
  - Registro
      - *Falta Migrar*
  - Mi Perfil
      - *Falta Migrar*
  - Panel de Control (Admin)
      - *Falta Migrar*
  - Carrito de Compras (Resumen de pago / Checkout).
      - *Falta Migrar*

# Páginas a arreglar:
  - Login/Registro: Arreglar Validación de formularios

  - Pago: Debo integrarlo en Carrito de compras

------------------

# Instruccioes de la Evaluación:

idelidad Visual y Diseño Base



Migración estricta: Trasladar el proyecto original (HTML + CSS + JS) a React manteniendo el diseño y la estructura visual lo más intactos posible.


Ajustes permitidos: Solo modificaciones menores propias de la adaptación a componentes (como React Bootstrap).


Penalización: Cualquier rediseño drástico o cambio total de la interfaz será calificado con la nota mínima en el ítem de diseño, garantizando así la autoría individual.


Arquitectura y Estructura de Código



Atomic Design: Estructurar el proyecto dividiendo la interfaz en Átomos, Moléculas, Organismos y Páginas.


Modularidad: Alta descomposición en componentes y sub-componentes de responsabilidad única. Está estrictamente prohibido pegar bloques de código HTML en un solo archivo.


Interfaz, Responsividad y Estilos



Componentes responsivos: Integrar al menos 4 elementos adaptables a dispositivos móviles distribuidos en las páginas.


Uso de React Bootstrap: Aplicarlo de manera estratégica solo en elementos complejos (como formularios), conservando y adaptando el CSS original para el resto de la interfaz.


Interactividad y Gestión de Estado (useState)



Funcionalidades interactivas: Incorporar al menos 4 características distintas y funcionales que usen estados (ej. alternancia de tema claro/oscuro, carrito de compras, filtrado dinámico, agregar a favoritos, etc).


CRUD en Memoria (Panel de Control): Implementar la creación temporal de nuevos productos al catálogo usando el estado, asignando una imagen genérica por defecto para omitir la carga de archivos reales.


Autenticación y Rutas Privadas



Inicio de Sesión: Desarrollar una vista de login que valide credenciales estáticas.


Protección de Rutas: Utilizar localStorage para gestionar la sesión y restringir el acceso al Panel de Control únicamente a los usuarios autenticados.


Validaciones de Formularios



Adaptación: Mantener e implementar las validaciones requeridas desde la primera entrega.


Campos de contexto (Requisito Crítico): Es obligatorio incluir campos adicionales pertinentes a la temática de la tienda, punto que muchos omitieron en la evaluación anterior.


Enrutamiento y Navegación 



Gestión de Rutas: Utilizar la librería react-router-dom para estructurar y conectar todas las páginas de la aplicación. 


Páginas Requeridas:

Index (Página de inicio).
Productos (Catálogo principal).
Producto (Vista de detalle de un producto).
Login (Inicio de sesión).
Registro (Creación de cuenta de usuario).
Panel de Control / Admin (Incluye el formulario de registro de productos).
Carrito de Compras (Resumen de pago / Checkout).
Mi Perfil (Datos del usuario).
Error 404 (Página no encontrada).


Documentación del Proyecto



Actualización del ERS: Actualizar el documento de Especificación de Requisitos de Software (ERS) iniciado en la primera entrega.


Coherencia estricta: Los requisitos documentados deben reflejar fielmente solo lo que está implementado actualmente en su página web.


Testing y Aseguramiento de Calidad (Vitest)



Plan de Pruebas: Confeccionar un archivo plan_de_pruebas.md que detalle claramente los escenarios de prueba, especificando qué funcionalidades y componentes críticos se van a evaluar.


Implementación de Pruebas (Vitest): Desarrollar un mínimo de 10 pruebas unitarias utilizando Vitest. Estas deben aplicar el patrón AAA (Arrange, Act, Assert) y enfocarse en validar el comportamiento real de la aplicación.


Ronda de preguntas (grupos que presentan)



Durante la presentación se realizará una ronda de preguntas que podrá considerar tanto la explicación de características implementadas en sus páginas como la demostración práctica de cómo realizar determinadas acciones.


Semana de desarrollo


La semana de desarrollo está destinada a resolver dudas relacionadas con el caso y los requerimientos de la evaluación, no a resolver dudas específicas sobre el código desarrollado.


Si un grupo o integrante decide trabajar en otro lugar de la sede, como la biblioteca, en otro espacio, o desde su casa, deberá enviar un mensaje indicando esta decisión y señalando brevemente en qué estará trabajando. Esto permitirá considerar su participación como presente durante la jornada.


Los mensajes que no cumplan con estas instrucciones no serán considerados para efectos de asistencia.


Entregables


Documento ERS.
Proyecto comprimido con todos sus archivos.
Presentación (ppt).
Enlace al repositorio GitHub.
Enlace a Trello o plataforma similar utilizada para la planificación.
Video de presentación del proyecto (SOLO los grupos eximidos de presentar) de máximo 15 minutos.
Basta con un integrante del grupo.

