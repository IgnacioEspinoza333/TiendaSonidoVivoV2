import Form from 'react-bootstrap/Form';
import FieldError from '../atoms/FieldError';

// Lista desplegable con validación (instrumento principal, nivel, etc.)
export default function SelectField({
  id, name, label, opciones, placeholder = 'Selecciona una opción',
  value, onChange, error, validado = false,
}) {
  const estado = validado ? (error ? 'invalido' : 'valido') : '';

  return (
    <Form.Group controlId={id} className="grupo-form">
      <Form.Label>{label}</Form.Label>
      <Form.Select name={name} value={value} onChange={onChange} className={estado}>
        <option value="">{placeholder}</option>
        {opciones.map((opcion) => (
          <option key={opcion} value={opcion}>{opcion}</option>
        ))}
      </Form.Select>
      <FieldError mensaje={error} />
    </Form.Group>
  );
}