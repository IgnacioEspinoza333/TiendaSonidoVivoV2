import Form from 'react-bootstrap/Form';
import FieldError from '../atoms/FieldError';

// Campo de texto: label + input (React Bootstrap) + mensaje de error
export default function FormField({
  id, name, label, type = 'text', placeholder,
  value, onChange, error, validado = false, autoComplete,
}) {
  const estado = validado ? (error ? 'invalido' : 'valido') : '';

  return (
    <Form.Group controlId={id} className="grupo-form">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={estado}
        autoComplete={autoComplete}
      />
      <FieldError mensaje={error} />
    </Form.Group>
  );
}