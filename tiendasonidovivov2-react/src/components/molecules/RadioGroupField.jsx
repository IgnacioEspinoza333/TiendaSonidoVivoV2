import Form from 'react-bootstrap/Form';
import FieldError from '../atoms/FieldError';

// Grupo de opciones excluyentes (forma de pago, tipo de entrega)
export default function RadioGroupField({ legend, name, opciones, value, onChange, error }) {
  return (
    <div className="grupo-form">
      <label>{legend}</label>
      <ul className="lista-pago">
        {opciones.map(({ valor, etiqueta }) => (
          <li key={valor}>
            <Form.Check
              type="radio"
              id={`${name}-${valor}`}
              name={name}
              value={valor}
              label={etiqueta}
              checked={value === valor}
              onChange={onChange}
            />
          </li>
        ))}
      </ul>
      <FieldError mensaje={error} />
    </div>
  );
}