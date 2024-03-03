import styled from 'styled-components';
import theme from 'commonStyle/variables';

export const ContainerProductItem = styled.li`
  flex-basis: calc((100%) / 3);

  position: relative;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid #f2f2f2;

  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;

    object-fit: contain;
    object-position: center center;
    border-radius: 14px;
  }
`;

export const ImgWrapper = styled.div`
  height: 250px;
  margin-bottom: 14px;
`;
export const CardTitleWrapper = styled.h2`
  font-size: 16px;
  line-height: 1.3;
  max-height: 43px;
  overflow: hidden;
`;
export const CardPriceWrapper = styled.h3`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.primaryGray};
`;
export const CardButtonAddWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  button {
    color: #fff;
    text-align: center;
    padding: 10px;

    height: 33px;
    font-size: 16px;
    width: 100%;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid transparent;
    border-radius: 8px;
    background-color: #f96d15;
    border-color: transparent;

    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      background-color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  }

  .active {
    /* opacity: 0.6; */
    color: ${theme.colors.primaryGray};
    background-color: #fc9555;
  }
`;
export const ButtonHeard = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  stroke: red;
  background-color: transparent;

  &:hover {
    scale: 1.1;
  }
`;
