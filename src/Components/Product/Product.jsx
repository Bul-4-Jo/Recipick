import React, { useState, useEffect } from 'react';
import { ProductList, ProductListWrapper, ProductWrapper } from './Product.style';
import ProductItem from './ProductItem/ProductItem';
import { deleteProduct, getProduct } from './../../API/api';

export default function Product({ accountName, tagList }) {
  const [productList, setProductList] = useState([]);

  const deleteProductHandler = id => {
    deleteProduct(id);
    setProductList(prev => prev.filter(product => product.id !== id));
  };

  useEffect(() => {
    if (!accountName) return;

    getProduct(accountName).then(response => {
      if (tagList) {
        const filtered = response.filter(item => tagList.includes(item.itemName.trim()));

        setProductList(filtered);
      } else {
        setProductList(response);
      }
    });
  }, [accountName]);

  return (
    <>
      {!!productList.length && (
        <ProductWrapper>
          <h3>판매 중인 상품</h3>
          <ProductListWrapper>
            <ProductList>
              {accountName &&
                !!productList.length &&
                productList.map(product => (
                  <ProductItem
                    key={crypto.randomUUID()}
                    productData={product}
                    deleteProductHandler={deleteProductHandler}
                  />
                ))}
            </ProductList>
          </ProductListWrapper>
        </ProductWrapper>
      )}
    </>
  );
}
