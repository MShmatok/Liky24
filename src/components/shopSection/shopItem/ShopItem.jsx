import React from 'react';
import { ContainerShopList } from './ShopItem.styled';
import { Button } from 'commonStyle/Button.styled';

const ShopItem = ({ title }) => {
  return (
    <ContainerShopList>
      <button>{title}</button>
    </ContainerShopList>
  );
};

export default ShopItem;
