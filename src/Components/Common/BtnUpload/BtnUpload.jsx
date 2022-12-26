import React from 'react';
import { BtnUploadWrapper, ImgInp, ImgLabel } from './BtnUpload.style';
import ImgBtnUpload from '../../../Assets/Images/btn_upload_file_mainColor.png';

export default function BtnUpload({ size = 'medium' }) {
  return (
    <BtnUploadWrapper>
      <ImgLabel size={size} htmlFor='userImgInp'>
        <img src={ImgBtnUpload} alt='유저 이미지 등록' />
      </ImgLabel>
      <ImgInp id='userImgInp' type='file' />
    </BtnUploadWrapper>
  );
}
