import React, { useState, useEffect } from 'react';
import { ProductList, ProductListWrapper, ProductWrapper } from './Product.style';
import ProductItem from './ProductItem/ProductItem';
import { getProduct } from './../../API/api';

export default function Product({ accountName, tagList }) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProduct(accountName).then(response => {
      if (tagList) {
        const filtered = response.filter(item => tagList.includes(item.itemName));

        setProductList(filtered);
      } else {
        setProductList(response);
      }
    });
  }, [accountName]);

  return (
    <ProductWrapper>
      <h3>판매 중인 상품</h3>
      <ProductListWrapper>
        <ProductList>
          {!!productList.length &&
            productList.map(product => <ProductItem key={crypto.randomUUID()} productData={product} />)}
        </ProductList>
      </ProductListWrapper>
    </ProductWrapper>
  );
}
