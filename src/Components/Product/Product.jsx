import React from 'react';
import { ProductList, ProductListWrapper, ProductWrapper } from './Product.style';
import ProductItem from './ProductItem/ProductItem';

export default function Product() {
  return (
    <ProductWrapper>
      <h3>판매 중인 상품</h3>
      <ProductListWrapper>
        <ProductList>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ProductList>
      </ProductListWrapper>
    </ProductWrapper>
  );
}
//  여기 페이지신분이 값 받아서 map 활용
