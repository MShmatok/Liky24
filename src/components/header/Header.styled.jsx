import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'commonStyle/variables';

export const HeaderST = styled.header`
  padding: 8px 20px;
  nav {
    display: flex;
    justify-content: left;
    gap: 20px;
  }
`;

export const RouterLink = styled(NavLink)`
  display: flex;
  align-items: center;

  &.active {
    color: ${theme.colors.green};
  }

  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.45px;
`;
