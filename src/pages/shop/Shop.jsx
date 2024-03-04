import React from 'react';
import { SectionST } from './Shop.styled';
import ShopSection from 'components/shopSection/ShopSection';
import ProductsSection from 'components/productsSection/ProductsSection';

const Shop = () => {
  return (
    <div className="container">
      <SectionST>
        <ShopSection />
        <ProductsSection />
      </SectionST>
    </div>
  );
};

export default Shop;
