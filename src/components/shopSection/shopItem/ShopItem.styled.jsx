import styled from 'styled-components';
import theme from '../../../commonStyle/variables';

export const ContainerShopItem = styled.li`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    color: ${theme.colors.primaryDark};

    font-size: 16px;
    line-height: calc(20 / 16);
    font-weight: 500;
    text-align: center;

    padding: 15px;

    outline: none;
    border: none;
    border-radius: 4px;
    background-color: ${theme.colors.secondaryGrayText};

    box-shadow: 0px 4px 8px 0px rgba(172, 176, 187, 0.34);

    transition: all ${theme.animation.cubicBezier};
    cursor: pointer;

    &:hover {
      box-shadow: 0px 4px 14px 0px rgba(164, 171, 185, 0.54);
    }
    &:active {
      box-shadow: none;
    }
    &:disabled {
      background-color: ${theme.colors.secondaryBlue};
      cursor: not-allowed;
    }
  }
  &.active button {
    color: ${theme.colors.primaryLight};
    background-color: ${theme.colors.primaryGray};
  }
`;
