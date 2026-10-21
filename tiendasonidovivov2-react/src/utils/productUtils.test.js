import { filtrarProductos, crearProducto, siguienteId } from './productUtils';
import { productsData } from '../data/products';
import { FILTROS_CATALOGO, IMAGEN_POR_DEFECTO } from '../data/opciones';

describe('productUtils', () => {
  it('PU-09: el filtro "Baterías" incluye categorías escritas con y sin tilde', () => {
    // Arrange
    const productos = [
      { id: 1, nombre: 'Batería A', categoria: 'Baterias' },
      { id: 2, nombre: 'Batería B', categoria: 'Baterías' },
      { id: 3, nombre: 'Guitarra C', categoria: 'Guitarras' },
    ];
    const filtroBaterias = FILTROS_CATALOGO.find((f) => f.valor === 'baterias');

    // Act
    const resultado = filtrarProductos(productos, filtroBaterias);

    // Assert
    expect(resultado.map((p) => p.id)).toEqual([1, 2]);
  });

  it('PU-10: crea un producto con imagen genérica, precio formateado e id siguiente', () => {
    // Arrange
    const datos = {
      nombre: '  Telecaster Player ', categoria: 'Guitarras', marca: 'Fender',
      precio: '1299990', stock: '4', descripcion: 'Cuerpo de aliso, mástil de arce.',
    };
    const id = siguienteId(productsData);

    // Act
    const producto = crearProducto(datos, id);

    // Assert
    expect(producto.id).toBe(id);
    expect(producto.nombre).toBe('Telecaster Player');
    expect(producto.precio).toBe('1.299.990');
    expect(producto.stock).toBe(4);
    expect(producto.imagen).toBe(IMAGEN_POR_DEFECTO);
  });
});