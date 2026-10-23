import { renderHook, act } from '@testing-library/react';
import { FavoritesProvider, useFavorites } from './FavoritesContext';

const wrapper = ({ children }) => <FavoritesProvider>{children}</FavoritesProvider>;

describe('FavoritesContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('PU-33: alternarFavorito agrega y quita un producto y lo guarda en localStorage', () => {
    // Arrange
    const { result } = renderHook(() => useFavorites(), { wrapper });

    // Act
    act(() => {
      result.current.alternarFavorito(5);
    });

    // Assert
    expect(result.current.esFavorito(5)).toBe(true);
    expect(JSON.parse(localStorage.getItem('favoritosSonidoVivo'))).toEqual([5]);

    // Act
    act(() => {
      result.current.alternarFavorito(5);
    });

    // Assert
    expect(result.current.esFavorito(5)).toBe(false);
    expect(JSON.parse(localStorage.getItem('favoritosSonidoVivo'))).toEqual([]);
  });
});