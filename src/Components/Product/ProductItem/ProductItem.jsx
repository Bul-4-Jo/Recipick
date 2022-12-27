import React from 'react';
import { ImageWrapper, ProductItemWrapper, ProductName, ProductPrice } from './ProductItem.style';

export default function ProductItem({ productData }) {
  return (
    <ProductItemWrapper>
      <ImageWrapper>
        <img src={`https://mandarin.api.weniv.co.kr/${productData.itemImage}`} alt={productData.itemName} />
      </ImageWrapper>
      <ProductName>{productData.itemName}</ProductName>
      <ProductPrice>{productData.price.toLocaleString()}원</ProductPrice>
    </ProductItemWrapper>
  );
}
