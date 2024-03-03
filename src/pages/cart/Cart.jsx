import UserSection from 'components/useSection/UserSection';
import { SectionST } from 'pages/shop/Shop.styled';
import React from 'react';
import { ContainerMainSection, ContainerSummerySection } from './Cart.styled';
import CartSection from 'components/cartSection/CartSection';

const Cart = () => {
  return (
    <div className="container">
      <SectionST>
        <ContainerMainSection>
          <CartSection />
        </ContainerMainSection>
        <ContainerSummerySection></ContainerSummerySection>
        {/* <ShopSection />
        <ProductsSection /> */}
      </SectionST>
    </div>
  );
};

export default Cart;
