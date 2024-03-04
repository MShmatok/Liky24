import React from 'react';
import NoPhoto from '../../../img/NoPhoto.png';
import icons from '../../../img/svg/sprite.svg';

import {
  ButtonHeard,
  CardTitleWrapper,
  ContainerProductItem,
  ImgWrapper,
  CardPriceWrapper,
  CardButtonAddWrapper,
} from './ProductItem.styled';
import { useSelector } from 'react-redux';
import { selectFavorite } from '../../../redux/data/selectors';

const ProductItem = ({
  productData,
  classNameBtn,
  toggleToFromCart,
  toggleFavorite,
}) => {
  const favorite = useSelector(selectFavorite);

  return (
    <ContainerProductItem>
      <ButtonHeard onClick={toggleFavorite}>
        {favorite.includes(productData._id) ? (
          <svg width="24" height="24">
            <use href={icons + '#active'}></use>
          </svg>
        ) : (
          <svg width="24" height="24">
            <use href={icons + '#normal'}></use>
          </svg>
        )}
      </ButtonHeard>
      <ImgWrapper>
        <img
          src={productData.linkPhoto}
          onError={e => {
            e.target.src = NoPhoto;
          }}
          alt={productData.title}
        />
      </ImgWrapper>

      <CardTitleWrapper>{productData.title}</CardTitleWrapper>
      <CardPriceWrapper>Price: {productData.price}</CardPriceWrapper>
      <CardButtonAddWrapper>
        <button className={classNameBtn} onClick={toggleToFromCart}>
          {classNameBtn === 'normal' ? 'add to cart' : 'remove from cart'}
        </button>
      </CardButtonAddWrapper>
    </ContainerProductItem>
  );
};

export default ProductItem;
