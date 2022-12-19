import React from 'react';
import { ProductList, ProductWrapper } from './Product.style';
import ProductItem from './ProductItem/ProductItem';

export default function Product() {
  return (
    <ProductWrapper>
      <h3>판매 중인 상품</h3>
      <ProductList>
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </ProductList>
    </ProductWrapper>
  );
}
