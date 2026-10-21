import { Link } from 'react-router-dom';

// Portada de la página de inicio
export default function HeroSection() {
  return (
    <section id="hero" className="seccion-hero">
      <div className="hero-contenido">
        <span className="etiqueta-destacada">Catálogo con +340 referencias</span>
        <h2>Tu música merece el equipamiento adecuado</h2>
        <p>Especialistas en instrumentos musicales, amplificación y servicio técnico profesional en la Región de Valparaíso.</p>
        <div className="hero-botones">
          <Link to="/productos" className="cta-principal">Ver Catálogo Completo →</Link>
          {/* Ancla normal: solo hace scroll interno en la misma página */}
          <a href="#presentacion" className="cta-secundario">Conoce la tienda</a>
        </div>
      </div>
    </section>
  );
}