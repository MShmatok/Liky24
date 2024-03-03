import { createSelector } from '@reduxjs/toolkit';

export const selectorAllShops = state => state.data.allShops;

export const selectorProductsByIdShop = state => state.data.shopProducts;
export const selectorCurrentShop = state => state.data.currentShop;

export const selectPreOrder = state => state.data.preOrder;
export const selectFavorite = state => state.data.favoriteList;
export const selectSort = state => state.data.sort;

export const selectorSortedProducts = createSelector(
  [selectorProductsByIdShop, selectSort, selectFavorite],
  (Products, SortMarker, Favorite) => {
    let arr;
    switch (SortMarker) {
      case 'popular':
        return Products;

      case 'down':
        arr = [...Products];
        arr.sort((a, b) => b.price - a.price);
        arr.sort((a, b) => {
          const aIsFavorite = Favorite.includes(a._id);
          const bIsFavorite = Favorite.includes(b._id);
          if (aIsFavorite && !bIsFavorite) return -1;
          if (!aIsFavorite && bIsFavorite) return 1;
          return 0;
        });
        return arr;

      case 'up':
        arr = [...Products];
        arr.sort((a, b) => a.price - b.price);
        arr.sort((a, b) => {
          const aIsFavorite = Favorite.includes(a._id);
          const bIsFavorite = Favorite.includes(b._id);
          if (aIsFavorite && !bIsFavorite) return -1;
          if (!aIsFavorite && bIsFavorite) return 1;
          return 0;
        });
        return arr;

      default:
        break;
    }
  }
);
