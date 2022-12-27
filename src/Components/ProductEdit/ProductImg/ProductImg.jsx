import React from 'react';
import { ImgWrapper, ProductImgWrapper, Title } from './ProductImg.style';
import BtnUpload from './../../Common/BtnUpload/BtnUpload';

export default function ProductImg({ response, stateFunc }) {
  return (
    <ProductImgWrapper>
      <Title>이미지 등록</Title>
      <ImgWrapper>
        {!!response.length && <img src={`https://mandarin.api.weniv.co.kr/${response[0]}`} alt='' />}
        <BtnUpload stateFunc={stateFunc} response={response} color='gray' />
      </ImgWrapper>
    </ProductImgWrapper>
  );
}
