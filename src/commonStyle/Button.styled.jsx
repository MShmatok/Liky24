import styled from 'styled-components';
import theme from 'commonStyle/variables';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  line-height: calc(26 / 18);
  font-weight: 700;
  text-align: center;
  color: ${theme.colors.primaryLight};
  width: 100%;
  padding: 12px;
  letter-spacing: 0.2px;

  outline: none;
  border: none;
  border-radius: 10px;

  opacity: 1;
  background-color: ${theme.colors.green};
  transition: all ${theme.animation.cubicBezier};
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }
  &:disabled {
    opacity: 0.3;

    cursor: not-allowed;
  }
`;
