import React from 'react';
import { ProductInputWrapper } from './ProductInput.style';

export default function ProductInput() {
  return (
    <ProductInputWrapper>
      <label htmlFor='iptPrdName'>상품명</label>
      <input id='iptPrdName' type='text' placeholder='2~15자 이내여야 합니다.' />

      <label htmlFor='iptPrdPrice'>가격</label>
      <input id='iptPrdPrice' type='number' placeholder='숫자만 입력 가능합니다.' />

      <label htmlFor='iptPrdLink'>판매 링크</label>
      <input id='iptPrdLink' type='text' placeholder='URL을 입력해 주세요.' />
    </ProductInputWrapper>
  );
}
