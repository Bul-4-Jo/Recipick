import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductEditWrapper } from './ProductEdit.style';
import ProductForm from './../../../Components/ProductEdit/ProductForm/ProductForm';

export default function ProductEdit() {
  const [productData, setProductData] = useState();
  const productId = '63ab931ab2cb2056635846c0';
  const baseURL = process.env.REACT_APP_URL;

  const instance = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('Access Token')}`,
      'Content-type': 'application/json',
    },
  });

  const getProduct = async () => {
    try {
      const response = await instance.get(`/product/detail/${productId}`);

      return response.data.product;
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getProduct(productId).then(res => setProductData(res));
  });

  return (
    <ProductEditWrapper>
      <h2 className='screen-out'>상품 등록</h2>
      {productData && <ProductForm productDetail={productData} />}
    </ProductEditWrapper>
  );
}
