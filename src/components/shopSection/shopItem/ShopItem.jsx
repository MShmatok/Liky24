import React from 'react';
import { ContainerShopItem } from './ShopItem.styled';

const ShopItem = ({ title, selectShop, statusActive }) => {
  return (
    <ContainerShopItem className={statusActive ? 'active' : ''}>
      <button onClick={selectShop}>{title}</button>
    </ContainerShopItem>
  );
};

export default ShopItem;
