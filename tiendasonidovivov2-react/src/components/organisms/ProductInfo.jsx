import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';
import { precioANumero } from '../../utils/productUtils';
import FavoriteButton from '../atoms/FavoriteButton';
import PriceBlock from '../molecules/PriceBlock';
import QuantitySelector from '../molecules/QuantitySelector';
import PurchaseActions from './PurchaseActions';
import ProductTabs from './ProductTabs';

// Columna derecha del detalle: datos, cantidad, botones de compra y pestañas
export default function ProductInfo({ producto }) {
  const navigate = useNavigate();
  const { agregarAlCarrito } = useCart();
  const { esFavorito, alternarFavorito } = useFavorites();
  const [cantidad, setCantidad] = useState(1);

  const total = (precioANumero(producto.precio) * cantidad).toLocaleString('es-CL');

  const handleComprarAhora = () => {
    agregarAlCarrito(producto, cantidad);
    navigate('/carrito');
  };

  return (
    <div className="info-producto">
      <span className="categoria-etiqueta">{producto.categoria}</span>
      <h2 className="titulo-producto">{producto.nombre}</h2>

      <PriceBlock precio={producto.precio} />
      <p className="descripcion-corta">{producto.descripcion}</p>

      <FavoriteButton conTexto activo={esFavorito(producto.id)} onClick={() => alternarFavorito(producto.id)} />

      <QuantitySelector cantidad={cantidad} onCantidad={setCantidad} total={total} />
      <PurchaseActions onAgregar={() => agregarAlCarrito(producto, cantidad)} onComprarAhora={handleComprarAhora} />
      <ProductTabs producto={producto} />
    </div>
  );
}