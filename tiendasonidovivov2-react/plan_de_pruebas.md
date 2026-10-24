# Plan de Pruebas Unitarias

**Nombre del Estudiante:** Axel Juris, Ignacio Espinoza
<br />

**Componente / Módulo Principal:** Autenticación (Login y Registro), Carrito y Checkout, Catálogo, Panel de Control, Rutas protegidas.
<br />

**Fecha:** 21-10-2026

## Alcance

Se evalúan las funcionalidades críticas de la tienda Sonido Vivo:

- **Validaciones de formularios:** login, registro (con instrumento y nivel), checkout (con despacho condicional) y creación de productos.
- **Autenticación:** credenciales estáticas, registro de usuarios y sesión en `localStorage`.
- **Rutas privadas:** acceso al Panel de Control y a Mi Perfil solo con sesión iniciada.
- **Carrito y checkout:** cálculo de totales, suma de cantidades y campos de entrega.
- **Catálogo y panel:** filtrado por categoría (con y sin tilde) y CRUD de productos en memoria.
- **Página 404:** mensaje y enlaces de regreso.

Herramientas: Vitest, React Testing Library y jsdom. Todas las pruebas siguen el patrón AAA (Arrange, Act, Assert). Para ejecutarlas: `npm test`.

| ID | Componente<br>*(describe)* | Caso de Prueba<br>*(it / test)* | Preparación<br>*(Arrange: props, mocks)* | Acción<br>*(Act: fireEvent, render)* | Resultado Esperado<br>*(Assert: expect)* | Estado<br>*(Pasa / Falla)* |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| PU-01 | validators | Acepta correos de dominios permitidos y rechaza otros | Correos `cliente@gmail.com` y `cliente@yahoo.com` | Llamar `validarEmail` con cada uno | El permitido devuelve `''`; el otro devuelve un mensaje de error | Pasa |
| PU-02 | validators | Valida el formato del RUT (sin puntos y con guion) | RUT `12345678-9` y `123456789` (sin guion) | Llamar `validarRut` con ambos | El primero devuelve `''`; el segundo devuelve "Formato incorrecto. Ej: 12345678-9" | Pasa |
| PU-03 | validators | El login vacío reporta 3 errores y el válido ninguno | Un objeto con campos vacíos y las credenciales del admin | Llamar `validarLogin` con ambos | Errores en `usuario`, `email` y `password`; el válido devuelve `{}` | Pasa |
| PU-04 | validators | El registro exige contraseñas iguales e instrumento | Datos con contraseñas distintas e instrumento vacío | Llamar `validarRegistro(datos)` | Errores en `confirmarPassword` e `instrumento`; sin error en `nivel` | Pasa |
| PU-05 | validators | El checkout con retiro en tienda no exige dirección ni región | Datos válidos con `entrega: 'retiro'` y región y dirección vacías | Llamar `validarCheckout(datos)` | Devuelve `{}` (sin errores) | Pasa |
| PU-06 | validators | El checkout con despacho exige región y dirección | Los mismos datos con `entrega: 'despacho'` | Llamar `validarCheckout(datos)` | Errores solo en `region` y `direccion` | Pasa |
| PU-07 | validators | Calcula la edad y rechaza a menores de 18 años | Fecha de hoy 15-06-2026; nacimientos 16-06-2000, 15-06-2000 y 01-01-2015 | Llamar `calcularEdad` y `validarFechaNacimiento` | Edades 25 y 26; error "Debes ser mayor de 18 años" | Pasa |
| PU-08 | cartUtils | Calcula total, unidades y formato de precio del carrito | Carrito con 2 unidades de $349.990 y 3 unidades de $1.000 | Llamar `calcularTotal`, `contarUnidades` y `formatoCLP` | Total 702980; 5 unidades; texto con `$` y puntos de miles | Pasa |
| PU-09 | productUtils | El filtro "Baterías" incluye categorías con y sin tilde | 3 productos con categorías "Baterias", "Baterías" y "Guitarras"; filtro `baterias` | Llamar `filtrarProductos` | Devuelve solo los productos con id 1 y 2 | Pasa |
| PU-10 | productUtils | Crea un producto con imagen genérica, precio formateado e id siguiente | Datos del formulario (nombre con espacios, precio `1299990`, stock `4`) | Llamar `crearProducto(datos, siguienteId(...))` | Id siguiente; nombre sin espacios; precio `1.299.990`; stock numérico 4; imagen genérica | Pasa |
| PU-11 | authService | Inicia sesión con credenciales estáticas y rechaza una clave incorrecta | `localStorage` vacío; credenciales del admin correctas e incorrectas | Llamar `verificarCredenciales` con ambas | Usuario con rol `admin` y sin campo `password`; la incorrecta devuelve `null` | Pasa |
| PU-12 | authService | Registra un usuario, permite entrar con él y rechaza duplicados | `localStorage` vacío; datos de un usuario nuevo | Llamar `registrarUsuario` dos veces y `verificarCredenciales` | Primer registro `ok: true`; el login devuelve instrumento "Bajo"; el segundo registro `ok: false` con "ya está en uso" | Pasa |
| PU-13 | LoginForm | Al enviar vacío muestra los errores de cada campo | Render del formulario con router y contextos | Clic en el botón "Ingresar" | Se ven los mensajes de usuario, correo y contraseña | Pasa |
| PU-14 | LoginForm | Con credenciales inexistentes muestra un error general | Formulario completado con un usuario que no existe | Clic en "Ingresar" | Aparece "Usuario, correo o contraseña incorrectos." | Pasa |
| PU-15 | LoginForm | Con las credenciales del admin muestra el mensaje de éxito | Formulario completado con `admin`, `admin@duocuc.cl` y `admin123` | Clic en "Ingresar" | Se ve "¡Inicio de sesión exitoso!" y el botón "Ingresar" desaparece | Pasa |
| PU-16 | RegisterForm | Al enviar vacío exige instrumento y nivel | Render del formulario de registro | Clic en "Crear Cuenta" | Se ven los mensajes de instrumento y nivel | Pasa |
| PU-17 | CheckoutForm | Región y dirección aparecen solo con despacho a domicilio | Render del formulario (estado inicial: retiro en tienda) | Clic en "Despacho a domicilio" y luego en "Retiro en tienda" | Al inicio no existe "Región:"; con despacho aparecen región y dirección; con retiro vuelven a desaparecer | Pasa |
| PU-18 | CartTable | Muestra el producto con su subtotal y llama a `onEliminar` con su id | Carrito con un producto (id 7, 2 unidades de $100.000) y `onEliminar` simulado | Clic en el botón "Eliminar" | Se ve el nombre y el subtotal $200.000; `onEliminar` se llama con 7 | Pasa |
| PU-19 | ProductForm | Con datos válidos llama a `onCrear` y muestra el mensaje de éxito | Formulario completado con un producto válido y `onCrear` simulado | Clic en "Agregar Producto" | `onCrear` se llama 1 vez; aparece el mensaje "fue agregado al catálogo" con el nombre | Pasa |
| PU-20 | ProtectedRoute | Sin sesión redirige al login y oculta el contenido privado | `localStorage` vacío; ruta `/perfil` protegida | Renderizar la ruta | Se ve "Pantalla de login" y no "Contenido privado" | Pasa |
| PU-21 | ProtectedRoute | Con sesión guardada muestra el contenido privado | `usuarioActivo` guardado en `localStorage` | Renderizar la ruta | Se ve "Contenido privado" y no "Pantalla de login" | Pasa |
| PU-22 | ProductsContext | `agregarProducto` suma un producto al catálogo en memoria | Provider con el catálogo base; cantidad inicial guardada | Llamar `agregarProducto(datos)` dentro de `act` | Hay un producto más y el último se llama "Teclado Nuevo" | Pasa |
| PU-23 | ProductsContext | `eliminarProducto` quita solo el producto indicado | Provider con el catálogo base; id del primer producto | Llamar `eliminarProducto(id)` dentro de `act` | Hay un producto menos y ese id ya no existe | Pasa |
| PU-24 | CartContext | Agregar el mismo producto dos veces suma la cantidad y guarda en `localStorage` | Provider, `localStorage` limpio, `alert` simulado y precio `349.990` | Llamar `agregarAlCarrito` con cantidad 1 y luego 2 | Una sola línea con cantidad 3 y precio 349990; carrito guardado en `localStorage` | Pasa |
| PU-25 | NotFound | Muestra el error 404 con la dirección inexistente y enlaces | `MemoryRouter` en la ruta `/ruta/inexistente` | Renderizar la página | Se ve "404", la ruta pedida y el enlace "Volver al inicio" con `href="/"` | Pasa |
| PU-26 | ProductDetail | Al cambiar la cantidad se recalcula el total | Producto del catálogo en la ruta `/producto/1` dentro de router y contextos | Cambiar el campo "Cantidad:" a 3 | Se muestra el total igual al precio por 3, con formato chileno | Pasa |
| PU-27 | ProductDetail | Las pestañas alternan entre descripción y especificaciones | Detalle renderizado con la pestaña "Descripción Detallada" activa | Clic en el botón "Especificaciones" | Aparece "Categoría:" y desaparece el texto "Estás viendo los detalles completos" | Pasa |
| PU-28 | ProductDetail | El botón de WhatsApp muestra el aviso de redirección | Detalle renderizado; el aviso aún no existe | Clic en "Cotizar por WhatsApp" | Aparece "¡Redirigiendo a WhatsApp de Sonido Vivo!" | Pasa |
| PU-29 | ProductDetail | Un producto que no existe muestra "Producto no encontrado" | Ruta `/producto/9999` (id inexistente) | Renderizar la página | Se ve "Producto no encontrado" y un enlace "Volver al Catálogo" hacia `/productos` | Pasa |
| PU-30 | Home | Muestra las secciones principales y las 4 categorías con enlace al catálogo | Página Home dentro de `MemoryRouter` | Renderizar y buscar los enlaces "Ver productos" | Se ven los títulos de portada, categorías y taller; hay 4 enlaces a `/productos` y el enlace a WhatsApp | Pasa |
| PU-35 | ThemeContext | Sin valor guardado parte en modo oscuro y lo aplica en `<html>` | `localStorage` vacío y sin `data-theme` en `<html>` | Renderizar `ThemeProvider` con `renderHook(useTheme)` | `tema` es `dark`, `esOscuro` es `true` y `<html>` tiene `data-theme="dark"` | Pendiente |
| PU-36 | ThemeContext | `alternarTema` cambia entre oscuro y claro y guarda la elección | Provider recién creado en modo oscuro | Llamar `alternarTema()` dos veces dentro de `act` | Tras la primera: `light`, `data-theme="light"` y `localStorage` con `light`; tras la segunda vuelve a `dark` en los tres | Pendiente |
| PU-37 | ThemeContext | Recupera el modo claro guardado en `localStorage` | `temaSonidoVivo` guardado con el valor `light` | Renderizar `ThemeProvider` con `renderHook(useTheme)` | `esOscuro` es `false` y `<html>` tiene `data-theme="light"` | Pendiente |
| PU-38 | ThemeToggleButton | Refleja el estado en `aria-pressed` y llama a `onClick` al hacer clic | Botón con `esOscuro={true}` y `onClick` simulado | Clic en el botón "Modo oscuro" y re-render con `esOscuro={false}` | `onClick` se llama 1 vez; `aria-pressed` pasa de `true` a `false` | Pendiente |
| PU-39 | Header | El botón de tema del Header cambia el modo de toda la página | Header dentro de `MemoryRouter`, `AuthProvider` y `ThemeProvider`; `localStorage` vacío | Clic en el botón "Modo oscuro" | `<html>` pasa de `data-theme="dark"` a `data-theme="light"` y `aria-pressed` queda en `false` | Pendiente |