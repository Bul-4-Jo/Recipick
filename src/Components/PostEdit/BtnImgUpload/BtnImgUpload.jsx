import React from 'react';
import { BtnImgUploadWrapper } from './BtnImgUpload.style';
import ImgBtnUpload from '../../../Assets/Images/btn_upload_file_mainColor.png';

export default function BtnImgUpload() {
  return (
    <BtnImgUploadWrapper>
      <div>
        <label htmlFor='iptImgUpload'>
          <img src={ImgBtnUpload} alt='이미지 업로드' />
        </label>
        <input id='iptImgUpload' type='file' />
      </div>
    </BtnImgUploadWrapper>
  );
}
