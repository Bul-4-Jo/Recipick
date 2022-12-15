import React from 'react';
import { ImgWrapper, ProductImgWrapper, Title } from './ProductImg.style';
import ImgBtnUpload from '../../../Assets/Images/btn_upload_file_gray.png';

export default function ProductImg() {
  return (
    <ProductImgWrapper>
      <Title>이미지 등록</Title>
      <ImgWrapper>
        <img src='https://cdn.pixabay.com/photo/2018/05/26/10/54/strawberries-3431122_960_720.jpg' alt='' />
        <label htmlFor='iptPrdFile'>
          <img src={ImgBtnUpload} alt='제품 이미지 등록' />
        </label>
        <input id='iptPrdFile' type='file' />
      </ImgWrapper>
    </ProductImgWrapper>
  );
}
