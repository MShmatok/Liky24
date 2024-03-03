import styled from 'styled-components';
import theme from './variables';

export const MainTitle = styled.h1`
  color: ${theme.colors.secondDark};
  font-size: 24px;
  text-align: center;

  font-weight: 700;
  line-height: calc(36 / 24);
  letter-spacing: 0.25px;
`;

export const MainDescription = styled.p`
  color: ${theme.colors.primaryGray};

  text-align: center;
  font-size: 14px;
  line-height: calc(24 / 14);
  letter-spacing: 0.25px;
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
