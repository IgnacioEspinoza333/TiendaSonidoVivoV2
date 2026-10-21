// Precio actual del producto con la nota de IVA
export default function PriceBlock({ precio }) {
  return (
    <div className="precio-contenedor">
      <span className="precio-actual">${precio}</span>
      <span className="precio-iva">Precio con IVA incluido</span>
    </div>
  );
}