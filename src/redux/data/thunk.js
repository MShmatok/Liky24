import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchAllShopsAPI, sendDataAPI } from 'API/dataAPI';
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

export const fetchSendDataThunk = createAsyncThunk(
  'data/fetchSendData',
  async (data, { rejectWithValue }) => {
    try {
      const response = await sendDataAPI(data);
      return response;
    } catch (error) {
      toast.error(` Something's wrong. Unable to show month data!`);
      return rejectWithValue(error.message);
    }
  }
);
