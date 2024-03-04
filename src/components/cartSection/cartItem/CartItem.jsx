import React from 'react';
import { CartItemST } from './CartItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deletePreOrder, handleProductCount } from '../../../redux/data/slice';
import { selectorAllShops } from '../../../redux/data/selectors';
import icons from '../../../img/svg/sprite.svg';

const CartItem = ({ order }) => {
  const dispatch = useDispatch();
  const shops = useSelector(selectorAllShops);

  const handelChange = e => {
    const enteredValue = e.target.value;
    dispatch(
      handleProductCount({ _id: order?._id, count: Number(enteredValue) })
    );
  };

  const handelincrement = () => {
    dispatch(handleProductCount({ _id: order?._id, count: order?.count + 1 }));
  };

  const handelDecrement = () => {
    if (Number(order?.count) > 1) {
      dispatch(
        handleProductCount({ _id: order?._id, count: order?.count - 1 })
      );
    }
    return;
  };

  const hendleDeleteProduct = () => {
    dispatch(deletePreOrder(order));
  };

  return (
    <CartItemST>
      <div className="containerMain">
        <img src={order?.linkPhoto} alt={order?.title} />
        <div className="wrapper"></div>
        <span className="description">{order?.title}</span>
        <div className="price">{order?.price} ₴</div>
        <div className="containerInput">
          <button type="button" className="inputBtn" onClick={handelDecrement}>
            -
          </button>
          <input
            className="inputBox"
            type="number"
            value={order?.count}
            onChange={handelChange}
            min="1"
          />
          <button type="button" className="inputBtn" onClick={handelincrement}>
            +
          </button>
        </div>
        <span className="total">
          {Number(order?.count * order?.price).toFixed(2)} ₴
        </span>
        <button onClick={hendleDeleteProduct}>
          <svg width="24" height="24">
            <use href={icons + '#close'}></use>
          </svg>
        </button>
      </div>
      <p className="shopDetail">
        Shop:{' '}
        <span>{shops.find(shop => shop._id === order?.shopID)?.name}</span>
      </p>
    </CartItemST>
  );
};

export default CartItem;
