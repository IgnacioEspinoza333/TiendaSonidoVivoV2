import SectionHeading from '../molecules/SectionHeading';
import NoticeItem from '../molecules/NoticeItem';
import ProcessCard from '../molecules/ProcessCard';
import { AVISOS_TALLER, PROCESO_TALLER, SERVICIOS_TALLER, WHATSAPP_REPARACION } from '../../data/homeContent';

// Sección del taller de reparación de instrumentos de cuerda
export default function WorkshopSection() {
  return (
    <section id="taller" className="seccion revelar">
      <div className="contenedor-grid reves">
        <div className="imagen-presentacion">
          <img src="/img/taller.jpg" alt="Luthier trabajando en la reparación de una guitarra en el taller" />
        </div>

        <div className="texto-presentacion">
          <SectionHeading etiqueta="03 · Servicio Técnico" titulo="Taller de Reparación de Instrumentos de Cuerda" />
          <p>Ajustes, mantención y calibración profesional para guitarras eléctricas, acústicas, bajos y ukeleles.</p>

          <div className="caja-aviso">
            {AVISOS_TALLER.map((aviso) => (
              <NoticeItem key={aviso.titulo} {...aviso} />
            ))}
          </div>

          <div className="grid-proceso">
            {PROCESO_TALLER.map((paso) => (
              <ProcessCard key={paso.titulo} {...paso} />
            ))}
          </div>

          <ul className="lista-servicios">
            {SERVICIOS_TALLER.map((servicio) => (
              <li key={servicio}>✓ {servicio}</li>
            ))}
          </ul>

          <div className="taller-acciones">
            <a href={WHATSAPP_REPARACION} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <span className="icono-ws">💬</span> Cotizar Reparación por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}