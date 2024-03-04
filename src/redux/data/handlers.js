export const handleFetchAllShops = (state, { payload }) => {
  state.allShops = payload;
};

export const handleFetchAllProductsByShop = (state, { payload }) => {
  state.shopProducts = payload;
};

export const handleClearPreOrder = (state, { payload }) => {
  state.preOrder = [];
};


