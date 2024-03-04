import styled from 'styled-components';
import theme from 'commonStyle/variables';

export const ContainerShop = styled.div`
  flex-basis: 300px;
  height: 100%;

  padding: 10px;
  background-color: ${theme.colors.primaryLight};
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.primaryGray};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${theme.colors.secondGrey};
    width: 1px;
  }

  h1 {
    margin-bottom: 15px;
  }
`;
