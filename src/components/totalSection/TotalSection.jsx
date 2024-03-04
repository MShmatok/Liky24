import React from 'react';
import { ContainerTotalSection } from './TotalSection.styled';
import { useSelector } from 'react-redux';
import { selectPreOrder } from '../../redux/data/selectors';

const TotalSection = ({ handleSubmit }) => {
  const preOrder = useSelector(selectPreOrder);
  const calcTotal = preOrder => {
    let total = preOrder.reduce((sum, element) => {
      return sum + element.count * element.price;
    }, 0);
    return total;
  };
  return (
    <ContainerTotalSection>
      <h2>Total</h2>
      <p className="descriptionTotal">
        <span>{preOrder.length}</span> products for the amount of
      </p>
      <p className="totalValue">{calcTotal(preOrder).toFixed(2)} ₴</p>
      <button type="submit" className="confirmBtn">
        I confirm the order
      </button>
    </ContainerTotalSection>
  );
};

export default TotalSection;
