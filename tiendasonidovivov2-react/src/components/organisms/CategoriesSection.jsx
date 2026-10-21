import SectionHeading from '../molecules/SectionHeading';
import CategoryCard from '../molecules/CategoryCard';
import { CATEGORIAS_HOME } from '../../data/homeContent';

// Galería de categorías principales
export default function CategoriesSection() {
  return (
    <section id="categorias" className="seccion revelar">
      <SectionHeading
        etiqueta="02 · Explorar"
        titulo="Categorías Principales"
        subtitulo="Encuentra los instrumentos y accesorios que estás buscando."
      />
      <div className="galeria-categorias">
        {CATEGORIAS_HOME.map((categoria) => (
          <CategoryCard key={categoria.title} {...categoria} />
        ))}
      </div>
    </section>
  );
}