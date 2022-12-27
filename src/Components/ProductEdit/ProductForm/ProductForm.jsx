import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductFormWrapper } from './ProductForm.style';
import ProductImg from './../ProductImg/ProductImg';
import ProductInput from './../ProductInput/ProductInput';
import { useUploadFile } from './../../../Hooks/useUploadFile';
import ProductBtnPortal from './../ProductBtn/ProductBtn';
import { uploadProduct } from '../../../API/api';

export default function ProductForm() {
  const { uploadSingleFile, response } = useUploadFile();
  const [inputValue, setInputValue] = useState({ iptPrdLink: '', iptPrdName: '', iptPrdPrice: '' });
  const navigate = useNavigate();

  const validation = () => {
    if (inputValue.iptPrdPrice < 1) {
      alert('가격은 1원 이상으로 입력할 수 있습니다.');
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

    await uploadProduct(product);

    navigate(`/profile/${localStorage.getItem('user ID')}`);
  };

  return (
    <ProductFormWrapper onSubmit={onSubmitHandler} id='postContent'>
      <ProductImg response={response} stateFunc={uploadSingleFile} />
      <ProductInput inputValue={inputValue} setInputValue={setInputValue} />
      <ProductBtnPortal inputValue={inputValue} response={response} />
    </ProductFormWrapper>
  );
}
