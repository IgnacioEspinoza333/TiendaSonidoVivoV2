import Form from 'react-bootstrap/Form';
import FieldError from '../atoms/FieldError';

// Área de texto con validación (descripción del producto)
export default function TextAreaField({
  id, name, label, placeholder, value, onChange, error, validado = false, filas = 3,
}) {
  const estado = validado ? (error ? 'invalido' : 'valido') : '';

  return (
    <Form.Group controlId={id} className="grupo-form">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="textarea"
        rows={filas}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={estado}
      />
      <FieldError mensaje={error} />
    </Form.Group>
  );
}