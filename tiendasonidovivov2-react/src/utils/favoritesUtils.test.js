import { ordenarFavoritosPrimero } from './favoritesUtils';

describe('favoritesUtils', () => {
  it('PU-32: los favoritos aparecen primero y el resto conserva su orden', () => {
    // Arrange
    const productos = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
    const favoritos = [3, 2];

    // Act
    const resultado = ordenarFavoritosPrimero(productos, favoritos);

    // Assert
    expect(resultado.map((p) => p.id)).toEqual([2, 3, 1, 4]);
  });
});