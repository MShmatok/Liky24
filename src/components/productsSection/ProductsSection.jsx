import React from 'react';
import { ShopListST } from './ProductsSection.styled';
import ProductsList from './productsList/ProductsList';
import { useSelector } from 'react-redux';
import {
  selectorAllShops,
  selectorCurrentShop,
} from '../../redux/data/selectors';
import SortPanel from './productsList/sortPanel/SortPanel';

const ProductsSection = () => {
  const shops = useSelector(selectorAllShops);
  const currentShop = useSelector(selectorCurrentShop);

  return (
    <ShopListST>
      <h1>
        All products of the pharmacy{' '}
        <span>{shops.find(shop => shop._id === currentShop)?.name}</span>
      </h1>
      <SortPanel />
      <ProductsList />
    </ShopListST>
  );
};

export default ProductsSection;
