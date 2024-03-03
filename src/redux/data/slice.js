import {
  handleEditWater,
  handlerAddWater,
  handlerDeleteWater,
} from './handlers';
import {
  addWatersThunk,
  deleteEntryThunk,
  editWatersThunk,
  fetchAllProductsByShopThunk,
} from './thunk';
import { createSlice } from '@reduxjs/toolkit';
import { fetchAllShopsThunk } from './thunk';
import { handleFetchAllShops, handleFetchAllProductsByShop } from './handlers';

const initialState = {
  allShops: [],
  shopProducts: [],
  favoriteList: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllShopsThunk.fulfilled, handleFetchAllShops)
      .addCase(
        fetchAllProductsByShopThunk.fulfilled,
        handleFetchAllProductsByShop
      )

      .addCase(addWatersThunk.fulfilled, handlerAddWater)
      .addCase(deleteEntryThunk.fulfilled, handlerDeleteWater)
      .addCase(editWatersThunk.fulfilled, handleEditWater);
  },
});

export const dataReducer = dataSlice.reducer;
