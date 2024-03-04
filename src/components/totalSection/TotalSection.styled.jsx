import styled from 'styled-components';
import theme from 'commonStyle/variables';

export const ContainerTotalSection = styled.div`
  display: flex;
  flex-direction: column;

  width: 25%;
  height: 75%;

  padding: 10px;
  background-color: ${theme.colors.primaryLight};
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  h1 {
    margin-bottom: 15px;
  }

  h2 {
    margin-top: 15px;
    margin-bottom: 20px;
  }
  .descriptionTotal {
    color: ${theme.colors.secondaryGrayTextGlobal};
    font-size: 16px;
    span {
      font-weight: 600;
      color: ${theme.colors.primaryDark};
    }
  }
  .totalValue {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    font-size: 36px;
  }
  .confirmBtn {
    margin-top: 15px;

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
`;
