import { handleClearPreOrder } from './handlers';
import { fetchAllProductsByShopThunk, fetchSendDataThunk } from './thunk';
import { createSlice } from '@reduxjs/toolkit';
import { fetchAllShopsThunk } from './thunk';
import { handleFetchAllShops, handleFetchAllProductsByShop } from './handlers';

const initialState = {
  allShops: [],
  shopProducts: [],
  currentShop: '65e3a2fda81292f4dc0ac109',
  favoriteList: [],
  preOrder: [],
  sort: 'popular',
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addPreOrder(state, { payload }) {
      state.preOrder.push({ ...payload, count: 1 });
    },
    clearPreOrder(state, { payload }) {
      state.preOrder = [];
    },
    deletePreOrder(state, { payload }) {
      const indexDelete = state.preOrder.findIndex(
        order => order._id === payload._id
      );
      state.preOrder.splice(indexDelete, 1);
    },
    setIdShop(state, { payload }) {
      state.currentShop = payload;
    },
    setSortType(state, { payload }) {
      state.sort = payload;
    },
    addFavorite(state, { payload }) {
      state.favoriteList.push(payload._id);
    },
    deleteFavorite(state, { payload }) {
      const indexDelete = state.favoriteList.findIndex(
        item => item === payload._id
      );
      state.favoriteList.splice(indexDelete, 1);
    },
    handleProductCount(state, { payload }) {
      const index = state.preOrder.findIndex(
        order => order._id === payload._id
      );
      state.preOrder[index].count = payload.count;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAllShopsThunk.fulfilled, handleFetchAllShops)
      .addCase(
        fetchAllProductsByShopThunk.fulfilled,
        handleFetchAllProductsByShop
      )
      .addCase(fetchSendDataThunk.fulfilled, handleClearPreOrder);
  },
});

export const dataReducer = dataSlice.reducer;
export const {
  addPreOrder,
  deletePreOrder,
  setSortType,
  setIdShop,
  deleteFavorite,
  addFavorite,
  handleProductCount,
  clearPreOrder,
} = dataSlice.actions;
