import styled from 'styled-components';
import theme from 'commonStyle/variables';

export const CartItemST = styled.li`
  width: 100%;
  height: auto;
  padding: 10px;
  border-bottom: 1px solid ${theme.colors.secondGrey};
  .containerMain {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  img {
    width: 64px;
    height: auto;
  }
  .wrapper {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }

  .description {
    width: 50%;
    overflow-x: hidden;
  }

  .price {
    width: 15%;
  }

  .total {
    width: 20%;
  }
  .containerInput {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .inputBtn {
    background-color: transparent;
    font-size: 36px;
    font-weight: 400;
  }
  .inputBox {
    width: 56px;
    height: 40px;

    background-color: #fff;
    box-sizing: border-box;
    padding-left: 12px;
    padding-right: 12px;

    border: 1px solid #d2d2d2;
    border-radius: 8px;

    text-align: center;
  }

  button {
    background-color: transparent;
    &:hover {
      cursor: pointer;
      scale: 1.2;
    }
  }

  .shopDetail {
    padding: 0 15px;
    font-size: 12px;
    color: ${theme.colors.primaryDark};
    span {
      color: ${theme.colors.secondaryGrayText};
    }
  }
`;
