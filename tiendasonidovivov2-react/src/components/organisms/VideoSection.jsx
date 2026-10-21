import SectionHeading from '../molecules/SectionHeading';

// Video de presentación de la tienda
export default function VideoSection() {
  return (
    <section id="video-demo" className="seccion revelar">
      <SectionHeading
        etiqueta="04 · Multimedia"
        titulo="Conoce Nuestra Tienda y Sonido"
        subtitulo="Echa un vistazo a nuestras instalaciones en Viña del Mar y la prueba de nuestros equipos."
      />
      <div className="contenedor-video">
        <video controls poster="/img/video-cover.jpg">
          <source src="/video/video_tienda.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de video HTML5.
        </video>
      </div>
    </section>
  );
}