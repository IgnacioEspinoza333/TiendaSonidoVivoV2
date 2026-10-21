import { Fragment } from 'react';
import { Link } from 'react-router-dom';

// Migas de pan: los items con "to" son enlaces; el último (sin "to") es la página actual
export default function Breadcrumb({ items }) {
  return (
    <div className="migas-de-pan">
      {items.map((item, indice) => (
        <Fragment key={item.etiqueta}>
          {indice > 0 && ' > '}
          {item.to ? <Link to={item.to}>{item.etiqueta}</Link> : <span>{item.etiqueta}</span>}
        </Fragment>
      ))}
    </div>
  );
}