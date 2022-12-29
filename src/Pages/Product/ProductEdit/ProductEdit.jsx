import React from 'react';
import { useLocation } from 'react-router-dom';
import { ProductEditWrapper } from './ProductEdit.style';
import ProductForm from './../../../Components/ProductEdit/ProductForm/ProductForm';

export default function ProductEdit() {
  const { state } = useLocation();

  return (
    <ProductEditWrapper>
      <h2 className='screen-out'>상품 등록</h2>
      {state && <ProductForm productDetail={state} />}
    </ProductEditWrapper>
  );
}
