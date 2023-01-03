import React from 'react';
import { ProductInputWrapper } from './ProductInput.style';

export default function ProductInput({ inputValue, setInputValue }) {
  const onChangeHandler = e => {
    const { name, value } = e.target;

    if (name === 'iptPrdPrice') {
      const numValue = Number(value.replace(/[^0-9]/g, ''));
      const localeValue = numValue.toLocaleString();

      setInputValue(values => ({ ...values, [name]: localeValue }));
    } else {
      setInputValue(values => ({ ...values, [name]: value }));
    }
  };

  return (
    <ProductInputWrapper>
      <label htmlFor='iptPrdName'>상품명</label>
      <input
        onChange={onChangeHandler}
        value={inputValue.iptPrdName}
        name='iptPrdName'
        id='iptPrdName'
        type='text'
        minLength='2'
        maxLength='15'
        placeholder='2~15자 이내여야 합니다.'
      />

      <label htmlFor='iptPrdPrice'>가격</label>
      <input
        onChange={onChangeHandler}
        value={inputValue.iptPrdPrice}
        name='iptPrdPrice'
        id='iptPrdPrice'
        type='text'
        maxLength='17'
        placeholder='숫자만 입력 가능합니다.'
      />

      <label htmlFor='iptPrdLink'>판매 링크</label>
      <input
        onChange={onChangeHandler}
        value={inputValue.iptPrdLink}
        name='iptPrdLink'
        id='iptPrdLink'
        type='text'
        placeholder='URL을 입력해 주세요.'
      />
    </ProductInputWrapper>
  );
}
