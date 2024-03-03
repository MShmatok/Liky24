import React, { useState } from 'react';
import { CartItemST } from './CartItem.styled';
import { number } from 'prop-types';

const CartItem = ({ order }) => {
  // const { title, linkPhoto, price } = order;
  // console.log(\);
  const [count, setCount] = useState(1);
  const handelChange = e => {
    const enteredValue = e.target.value;

    // Перевірка, чи введене значення є числом
    if (/^\d*$/.test(enteredValue)) {
      setCount(enteredValue);
    }
  };

  const handelincrement = () => {
    setCount(pr => Number(pr) + 1);
  };
  const handelDecrement = () => {
    setCount(pr => {
      if (Number(pr) > 1) {
        return Number(pr) - 1;
      }

      return pr;
    });
  };
  return (
    <CartItemST>
      <img src={order?.linkPhoto} alt={order?.title} />
      <div className="wrapper"></div>
      <span className="description">{order?.title}</span>
      <div className="price">{order?.price} ₴</div>
      <div className="containerInput">
        <button className="inputBtn" onClick={handelDecrement}>
          -
        </button>
        <input
          className="inputBox"
          type="number"
          value={count}
          onChange={handelChange}
          min="1"
        />
        <button className="inputBtn" onClick={handelincrement}>
          +
        </button>
      </div>
      <span className="total">{Number(count * order?.price).toFixed(2)} ₴</span>
    </CartItemST>
  );
};

export default CartItem;
