import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllShopsThunk } from '../../../redux/data/thunk';
import {
  selectorAllShops,
  selectorCurrentShop,
} from '../../../redux/data/selectors';
import { ContainerShopList } from './ShopList.styled';
import ShopItem from '../shopItem/ShopItem';
import { setIdShop } from '../../../redux/data/slice';

const ShopList = () => {
  const dispatch = useDispatch();
  const shops = useSelector(selectorAllShops);
  const currentShop = useSelector(selectorCurrentShop);
  const selectShop = idShop => {
    dispatch(setIdShop(idShop));
  };

  useEffect(() => {
    dispatch(fetchAllShopsThunk());
  }, [dispatch]);

  return (
    <ContainerShopList>
      {shops.map(shop => (
        <ShopItem
          key={shop._id}
          title={shop.name}
          selectShop={() => {
            selectShop(shop._id);
          }}
          statusActive={currentShop === shop._id}
        />
      ))}
    </ContainerShopList>
  );
};

export default ShopList;
