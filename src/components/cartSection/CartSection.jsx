import React from 'react';
import { CartList } from './CartSection.styled';
import CartItem from './cartItem/CartItem';
import { useSelector } from 'react-redux';
import { selectPreOrder } from '../../redux/data/selectors';

const CartSection = () => {
  const preOrder = useSelector(selectPreOrder);

  return (
    <CartList>
      {preOrder.map(order => {
        return <CartItem key={order._id} order={order} />;
      })}
      <CartItem />
    </CartList>
  );
};

export default CartSection;
