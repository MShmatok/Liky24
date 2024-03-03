export const handleFetchAllShops = (state, { payload }) => {
  state.allShops = payload;
};

export const handleFetchAllProductsByShop = (state, { payload }) => {
  state.shopProducts = payload;
};

export const handlerAddWater = (
  state,
  { payload: { _id, waterVolume, date, owner } }
) => {
  state.today.waterInputsForToday.push({ _id, waterVolume, date, owner });
};

export const handlerDeleteWater = (state, { payload }) => {
  state.today.waterInputsForToday = state.today.waterInputsForToday.filter(
    data => data._id !== payload
  );
};

export const handleEditWater = (state, { payload }) => {
  const array = state.today.waterInputsForToday;
  let indexChange;
  for (let index = 0; index < array.length; index++) {
    if (array[index]._id === payload._id) {
      indexChange = index;
      break;
    }
  }
  array[indexChange] = payload;
};
