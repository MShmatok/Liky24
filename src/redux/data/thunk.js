import { createAsyncThunk } from '@reduxjs/toolkit';

import { editWaters, addWaters, deleteEntry } from 'API/dataAPI';
import { fetchAllShopsAPI } from 'API/dataAPI';
import { fetchAllProductsByShopAPI } from 'API/dataAPI';
import { toast } from 'react-toastify';

export const fetchAllShopsThunk = createAsyncThunk(
  'data/fetchAllShops',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchAllShopsAPI();
      return response;
    } catch (error) {
      toast.error(` Something's wrong. Go get more water!`);
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAllProductsByShopThunk = createAsyncThunk(
  'data/fetchAllProductsByShop',
  async (shopId, { rejectWithValue }) => {
    try {
      const response = await fetchAllProductsByShopAPI(shopId);
      return response;
    } catch (error) {
      toast.error(` Something's wrong. Unable to show month data!`);
      return rejectWithValue(error.message);
    }
  }
);

export const addWatersThunk = createAsyncThunk(
  'water/addWaters',
  async (newWaterUsed, { rejectWithValue }) => {
    try {
      const data = await addWaters(newWaterUsed);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const editWatersThunk = createAsyncThunk(
  'water/editWaters',
  async (inputData, { rejectWithValue }) => {
    try {
      const data = await editWaters(inputData);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteEntryThunk = createAsyncThunk(
  'water/deleteEntry',
  async (waterId, { rejectWithValue }) => {
    try {
      await deleteEntry(waterId);
      return waterId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
