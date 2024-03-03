import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllShopsThunk } from '../../../redux/data/thunk';
import { selectorAllShops } from '../../../redux/data/selectors';
import { ContainerShopList } from './ShopList.styled';
import ShopItem from '../shopItem/ShopItem';

const ShopList = () => {
  const dispatch = useDispatch();
  const shops = useSelector(selectorAllShops);

  useEffect(() => {
    dispatch(fetchAllShopsThunk());
  }, [dispatch]);

  return (
    <ContainerShopList>
      {' '}
      {shops.map(shop => (
        <ShopItem title={shop.name} />
      ))}
    </ContainerShopList>
  );
};

export default ShopList;
