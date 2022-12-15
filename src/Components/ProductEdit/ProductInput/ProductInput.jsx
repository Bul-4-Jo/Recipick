import React from 'react';
import { ProductInputWrapper } from './ProductInput.style';

export default function ProductInput() {
  return (
    <ProductInputWrapper>
      <label htmlFor='iptPrdName'>상품명</label>
      <input id='iptPrdName' type='text' />

      <label htmlFor='iptPrdPrice'>가격</label>
      <input id='iptPrdPrice' type='number' />

      <label htmlFor='iptPrdLink'>판매 링크</label>
      <input id='iptPrdLink' type='text' />
    </ProductInputWrapper>
  );
}
