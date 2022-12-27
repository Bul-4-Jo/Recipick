import React from 'react';
import ProductForm from '../../../Components/ProductEdit/ProductForm/ProductForm';
import { ProductUploadWrapper } from './ProductUpload.style';

export default function ProductUpload() {
  return (
    <ProductUploadWrapper>
      <h2 className='screen-out'>상품 등록</h2>
      <ProductForm />
    </ProductUploadWrapper>
  );
}
