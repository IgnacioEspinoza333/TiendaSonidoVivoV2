import SectionHeading from '../molecules/SectionHeading';
import MetricItem from '../molecules/MetricItem';
import { METRICAS } from '../../data/homeContent';

// Sección "Quiénes somos" con métricas e imagen
export default function AboutSection() {
  return (
    <section id="presentacion" className="seccion revelar">
      <div className="contenedor-grid">
        <div className="texto-presentacion">
          <SectionHeading etiqueta="01 · Quiénes Somos" titulo="11 Años impulsando el talento musical" />
          <p>Ubicados en el corazón de <strong>Viña del Mar</strong>, en <strong>Sonido Vivo</strong> nos apasiona acompañar a músicos emergentes y profesionales en la búsqueda de su sonido ideal.</p>
          <p>Contamos con una amplia variedad de instrumentos musicales, equipos de sonido y accesorios con más de 340 referencias en inventario continuo. Atendemos de forma cercana en nuestro showroom y realizamos envíos a todo Chile.</p>

          <div className="resumen-metricas">
            {METRICAS.map((metrica) => (
              <MetricItem key={metrica.texto} {...metrica} />
            ))}
          </div>
        </div>
        <div className="imagen-presentacion">
          <img src="/img/nosotros.jpg" alt="Fachada y equipo de Sonido Vivo en Viña del Mar" />
        </div>
      </div>
    </section>
  );
}