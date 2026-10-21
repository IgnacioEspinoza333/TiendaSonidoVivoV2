import { useState } from 'react';

const PESTAÑAS = [
  { id: 'detalles', etiqueta: 'Descripción Detallada' },
  { id: 'especificaciones', etiqueta: 'Especificaciones' },
];

// Pestañas con la descripción y las especificaciones del producto
export default function ProductTabs({ producto }) {
  const [activa, setActiva] = useState('detalles');

  return (
    <div className="pestañas-contenedor">
      <div className="pestañas-botones">
        {PESTAÑAS.map(({ id, etiqueta }) => (
          <button
            key={id}
            type="button"
            className={`btn-pestaña ${activa === id ? 'activa' : ''}`}
            onClick={() => setActiva(id)}
          >
            {etiqueta}
          </button>
        ))}
      </div>

      <div className="contenido-pestaña activa">
        {activa === 'detalles' ? (
          <p>
            Estás viendo los detalles completos de <strong>{producto.nombre}</strong>. {producto.descripcion} Este instrumento ha sido revisado por nuestros técnicos en Viña del Mar y cuenta con 6 meses de garantía directa en nuestra tienda.
          </p>
        ) : (
          <ul>
            <li><strong>Categoría:</strong> {producto.categoria}</li>
            {producto.marca && <li><strong>Marca:</strong> {producto.marca}</li>}
            <li><strong>Condición:</strong> Nuevo</li>
            <li>
              <strong>Disponibilidad:</strong> En stock local
              {producto.stock !== undefined && ` (${producto.stock} unidades)`}
            </li>
            <li><strong>Envío:</strong> Despacho a todo Chile o retiro en local.</li>
          </ul>
        )}
      </div>
    </div>
  );
}