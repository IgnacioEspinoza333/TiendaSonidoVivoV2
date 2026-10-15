import { Link } from 'react-router-dom';
import CategoryCard from '../components/molecules/CategoryCard';

export default function Home() {
  return (
    <>
      <section id="hero" className="seccion-hero">
        <div className="hero-contenido">
          <span className="etiqueta-destacada">Catálogo con +340 referencias</span>
          <h2>Tu música merece el equipamiento adecuado</h2>
          <p>Especialistas en instrumentos musicales, amplificación y servicio técnico profesional en la Región de Valparaíso.</p>
          <div className="hero-botones">
            <Link to="/productos" className="cta-principal">Ver Catálogo Completo →</Link>
            {/* Usamos un ancla normal si solo es scroll interno en la misma página */}
            <a href="#presentacion" className="cta-secundario">Conoce la tienda</a>
          </div>
        </div>
      </section>

      <section id="presentacion" className="seccion revelar">
        <div className="contenedor-grid">
          <div className="texto-presentacion">
            <span className="etiqueta">01 · Quiénes Somos</span>
            <h2>11 Años impulsando el talento musical</h2>
            <p>Ubicados en el corazón de <strong>Viña del Mar</strong>, en <strong>Sonido Vivo</strong> nos apasiona acompañar a músicos emergentes y profesionales en la búsqueda de su sonido ideal.</p>
            <p>Contamos con una amplia variedad de instrumentos musicales, equipos de sonido y accesorios con más de 340 referencias en inventario continuo. Atendemos de forma cercana en nuestro showroom y realizamos envíos a todo Chile.</p>

            <div className="resumen-metricas">
              <div className="metrica">
                <span className="metrica-numero">+11</span>
                <span className="metrica-texto">Años de trayectoria</span>
              </div>
              <div className="metrica">
                <span className="metrica-numero">340+</span>
                <span className="metrica-texto">Productos disponibles</span>
              </div>
              <div className="metrica">
                <span className="metrica-numero">100%</span>
                <span className="metrica-texto">Garantía y soporte</span>
              </div>
            </div>
          </div>
          <div className="imagen-presentacion">
            <img src="/img/nosotros.jpg" alt="Fachada y equipo de Sonido Vivo en Viña del Mar" />
          </div>
        </div>
      </section>

      <section id="categorias" className="seccion revelar">
        <span className="etiqueta">02 · Explorar</span>
        <h2>Categorías Principales</h2>
        <p className="subtitulo-seccion">Encuentra los instrumentos y accesorios que estás buscando.</p>

        <div className="galeria-categorias">
          <CategoryCard 
            imgSrc="/img/guitarras.jpg" 
            imgAlt="Guitarras eléctricas y acústicas"
            title="Guitarras y Bajos"
            description="Modelos eléctricos, acústicos, electroacústicos y accesorios."
            linkTo="/productos"
          />
          <CategoryCard 
            imgSrc="/img/teclados.jpg" 
            imgAlt="Teclados"
            title="Teclados y Sintetizadores"
            description="Pianos digitales, controladores MIDI y teclados."
            linkTo="/productos"
          />
          <CategoryCard 
            imgSrc="/img/baterias.jpg" 
            imgAlt="Baterías"
            title="Baterías y Percusión"
            description="Sets acústicos, baterías electrónicas, platillos."
            linkTo="/productos"
          />
          <CategoryCard 
            imgSrc="/img/audio.jpg" 
            imgAlt="Audio"
            title="Audio y Amplificación"
            description="Amplificadores, micrófonos de estudio, pedales y cables."
            linkTo="/productos"
          />
        </div>
      </section>

      <section id="taller" className="seccion revelar">
        <div className="contenedor-grid reves">
          <div className="imagen-presentacion">
            <img src="/img/taller.jpg" alt="Luthier trabajando en la reparación de una guitarra en el taller" />
          </div>

          <div className="texto-presentacion">
            <span className="etiqueta">03 · Servicio Técnico</span>
            <h2>Taller de Reparación de Instrumentos de Cuerda</h2>
            <p>Ajustes, mantención y calibración profesional para guitarras eléctricas, acústicas, bajos y ukeleles.</p>

            <div className="caja-aviso">
              <div className="aviso-item">
                <span>📍</span>
                <p><strong>Recepción Exclusivamente Presencial:</strong> El ingreso de instrumentos se realiza de forma presencial en nuestro local en Viña del Mar. <em>No recibimos encomiendas ni envíos por Starken/Chilexpress para reparaciones.</em></p>
              </div>
              <div className="aviso-item">
                <span>🎸</span>
                <p><strong>Exclusivo Instrumentos de Cuerda:</strong> Atendemos exclusivamente guitarras, bajos y ukeleles. <em>No realizamos servicio técnico de teclados, baterías ni amplificadores.</em></p>
              </div>
            </div>

            <div className="grid-proceso">
              <div className="tarjeta-proceso">
                <span className="icono-proceso">🔍</span>
                <h4>Diagnóstico Gratuito</h4>
                <p>Revisión inicial en mesón sin costo de evaluación.</p>
              </div>
              <div className="tarjeta-proceso">
                <span className="icono-proceso">⏱️</span>
                <h4>Entrega Estimada</h4>
                <p>Calibraciones estándar listas en 48 a 72 horas hábiles.</p>
              </div>
            </div>

            <ul className="lista-servicios">
              <li>✓ Calibración completa, octavación y ajuste de alma.</li>
              <li>✓ Cambio de cuerdas, rectificado, coronado y pulido de trastes.</li>
              <li>✓ Circuitos electrónicos, blindajes y cambio de cápsulas.</li>
            </ul>

            <div className="taller-acciones">
              <a href="https://wa.me/56900000000?text=Hola,%20necesito%20reparar..." target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <span className="icono-ws">💬</span> Cotizar Reparación por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="video-demo" className="seccion revelar">
        <span className="etiqueta">04 · Multimedia</span>
        <h2>Conoce Nuestra Tienda y Sonido</h2>
        <p className="subtitulo-seccion">Echa un vistazo a nuestras instalaciones en Viña del Mar y la prueba de nuestros equipos.</p>

        <div className="contenedor-video">
          <video controls poster="/img/video-cover.jpg">
            {/* Recuerda mover tu carpeta de videos a public/video/ */}
            <source src="/video/video_tienda.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de video HTML5.
          </video>
        </div>
      </section>
    </>
  );
}