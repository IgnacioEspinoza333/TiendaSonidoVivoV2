import Form from 'react-bootstrap/Form';
import FieldError from '../atoms/FieldError';

// Casilla (Recordarme / Términos y Condiciones). El label puede incluir enlaces.
export default function CheckField({ id, name, label, checked, onChange, error }) {
  return (
    <div>
      <Form.Check
        type="checkbox"
        id={id}
        name={name}
        label={label}
        checked={checked}
        onChange={onChange}
        className="recordar-usuario"
      />
      <FieldError mensaje={error} />
    </div>
  );
}