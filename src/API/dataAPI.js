import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export const fetchAllShopsAPI = async () => {
  const { data } = await instance.get('/shops');
  console.log(data);
  return data;
};

export const fetchAllProductsByShopAPI = async shopId => {
  const { data } = await instance.get(`/products/${shopId}`);
  return data;
};

export const addWaters = async newWaterUsed => {
  const { data } = await instance.post('/water', newWaterUsed);
  return data;
};

export const deleteEntry = async waterId => {
  await instance.delete(`/water/${waterId}`);
};

export const editWaters = async ({ newWaterUsed, id }) => {
  const { data } = await instance.patch(
    `/water/${id}/waterVolume`,
    newWaterUsed
  );
  return data;
};
