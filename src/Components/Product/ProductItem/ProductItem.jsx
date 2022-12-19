import React from 'react';
import { ImageWrapper, ProductItemWrapper, ProductName, ProductPrice } from './ProductItem.style';

export default function ProductItem() {
  return (
    <ProductItemWrapper>
      <ImageWrapper>
        <img src='https://cdn.pixabay.com/photo/2018/05/26/10/54/strawberries-3431122_960_720.jpg' alt='' />
      </ImageWrapper>
      <ProductName>애월읍 노지 감귤 10kg 애월읍 노지 감귤 10kg</ProductName>
      <ProductPrice>35,000원</ProductPrice>
    </ProductItemWrapper>
  );
}
