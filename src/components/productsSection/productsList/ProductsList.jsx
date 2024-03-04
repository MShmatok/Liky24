import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectorCurrentShop,
  selectPreOrder,
  selectFavorite,
  selectorSortedProducts,
} from '../../../redux/data/selectors';
import { fetchAllProductsByShopThunk } from '../../../redux/data/thunk';
import { ContainerProductsList } from './ProductsList.styled';
import ProductItem from '../productItem/ProductItem';
import {
  addFavorite,
  addPreOrder,
  deleteFavorite,
  deletePreOrder,
} from '../../../redux/data/slice';

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectorSortedProducts);
  const currentShop = useSelector(selectorCurrentShop);

  const preOrder = useSelector(selectPreOrder);
  const favorite = useSelector(selectFavorite);

  const toggleToFromCart = product => {
    if (preOrder.some(order => order._id === product._id)) {
      dispatch(deletePreOrder(product));
    } else {
      dispatch(addPreOrder(product));
    }
  };

  const toggleFavorite = product => {
    if (favorite.includes(product._id)) {
      dispatch(deleteFavorite(product));
    } else {
      dispatch(addFavorite(product));
    }
  };

  useEffect(() => {
    dispatch(fetchAllProductsByShopThunk(currentShop));
  }, [currentShop, dispatch]);

  return (
    <ContainerProductsList>
      {products.map(product => (
        <ProductItem
          key={product._id}
          productData={product}
          toggleToFromCart={() => toggleToFromCart(product)}
          toggleFavorite={() => toggleFavorite(product)}
          classNameBtn={
            preOrder.some(order => order._id === product._id)
              ? 'active'
              : 'normal'
          }
        />
      ))}
    </ContainerProductsList>
  );
};

export default ProductsList;
