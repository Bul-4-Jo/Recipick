import React from 'react';
import { ProductEditWrapper } from './ProductEdit.style';
import ProductImg from './../../../Components/ProductEdit/ProductImg/ProductImg';
import ProductInput from '../../../Components/ProductEdit/ProductInput/ProductInput';

export default function ProductEdit() {
  return (
    <ProductEditWrapper>
      <h2 className='screen-out'>상품 등록</h2>
      <form>
        <ProductImg />
        <ProductInput />
      </form>
    </ProductEditWrapper>
  );
}
