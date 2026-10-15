import { Link } from 'react-router-dom';

export default function CategoryCard({ imgSrc, imgAlt, title, description, linkTo }) {
  return (
    <article className="tarjeta-categoria">
      <img src={imgSrc} alt={imgAlt} />
      <div className="categoria-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={linkTo} className="enlace-categoria">Ver productos →</Link>
      </div>
    </article>
  );
}