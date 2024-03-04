import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:3001/api',
  baseURL: 'https://liky24-back.onrender.com/api/',
});

export const fetchAllShopsAPI = async () => {
  const { data } = await instance.get('/shops');
  return data;
};

export const fetchAllProductsByShopAPI = async shopId => {
  const { data } = await instance.get(`/products/${shopId}`);
  return data;
};

export const sendDataAPI = async body => {
  const { data } = await instance.post(`/orders`, body);
  return data;
};
