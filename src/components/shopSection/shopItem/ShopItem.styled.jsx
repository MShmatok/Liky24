import styled from 'styled-components';
import theme from 'commonStyle/variables';

export const ContainerShopList = styled.li`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    font-size: 16px;
    line-height: calc(20 / 16);
    font-weight: 500;
    text-align: center;
    color: #fff;

    outline: none;
    border: none;
    border-radius: 10px;
    background-color: ${theme.colors.primaryAccent};
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

    transition: all ${theme.animation.cubicBezier};
    cursor: pointer;
    &:hover {
      box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    }
    &:active {
      box-shadow: none;
    }
    &:disabled {
      background-color: ${theme.colors.secondaryBlue};
      cursor: not-allowed;
    }
  }
`;
