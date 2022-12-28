import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ProductFormWrapper } from './ProductForm.style';
import ProductImg from './../ProductImg/ProductImg';
import ProductInput from './../ProductInput/ProductInput';
import { useUploadFile } from './../../../Hooks/useUploadFile';
import ProductBtnPortal from './../ProductBtn/ProductBtn';
import { editProduct, uploadProduct } from '../../../API/api';

export default function ProductForm({ productDetail }) {
  const { uploadSingleFile, response } = useUploadFile();
  const [inputValue, setInputValue] = useState({ iptPrdLink: '', iptPrdName: '', iptPrdPrice: '' });
  const navigate = useNavigate();

  const validation = () => {
    if (inputValue.iptPrdPrice < 1) {
      alert('가격은 1원 이상으로 입력할 수 있습니다.');
      throw new Error('가격은 1원 이상으로 입력할 수 있습니다.');
    }
  };

  const onSubmitHandler = async e => {
    e.preventDefault();

    validation();

    const product = {
      itemName: inputValue.iptPrdName,
      price: Number(inputValue.iptPrdPrice.replaceAll(',', '')),
      link: inputValue.iptPrdLink,
      itemImage: response[0],
    };

    if (productDetail) {
      const { id } = productDetail;

      await editProduct(id, product);
    } else {
      await uploadProduct(product);
    }

    navigate(`/profile/${localStorage.getItem('user ID')}`);
  };

  useEffect(() => {
    if (productDetail) {
      const { itemName, price, link, itemImage } = productDetail;

      const urlToFile = async url => {
        const fileData = await axios({
          url,
          method: 'get',
          responseType: 'blob',
        });
        const fileName = url.split('/').pop();
        const fileExt = url.split('.').pop();
        const metaData = { type: `image/${fileExt}` };

        return new File([fileData.data], fileName, metaData);
      };

      setInputValue({ iptPrdLink: link, iptPrdName: itemName, iptPrdPrice: String(price.toLocaleString()) });

      const prevImg = `https://mandarin.api.weniv.co.kr/${itemImage}`;

      urlToFile(prevImg).then(img => uploadSingleFile(img));
    }
  }, []);

  return (
    <ProductFormWrapper onSubmit={onSubmitHandler} id='postContent'>
      <ProductImg response={response} stateFunc={uploadSingleFile} />
      <ProductInput inputValue={inputValue} setInputValue={setInputValue} />
      <ProductBtnPortal inputValue={inputValue} response={response} />
    </ProductFormWrapper>
  );
}
