import React from 'react';
import { BtnUploadWrapper, ImgInp, ImgLabel } from './BtnUpload.style';
import ImgBtnUpload from '../../../Assets/Images/btn_upload_file_mainColor.png';
import ImgBtnUploadGray from '../../../Assets/Images/btn_upload_file_gray.png';

export default function BtnUpload({ size = 'medium', color = 'pink', stateFunc, response }) {
  const onClickHandler = e => {
    if (response.length >= 3) {
      alert('최대 3개의 이미지를 업로드할 수 있습니다.');
      e.preventDefault();
    }
  };
  const onChangeHandler = async e => {
    const file = e.target.files[0];

    if (file) {
      stateFunc(file);
    }
  };

  return (
    <BtnUploadWrapper>
      <ImgLabel onClick={onClickHandler} size={size} htmlFor='userImgInp'>
        <img src={color === 'pink' ? ImgBtnUpload : ImgBtnUploadGray} alt='유저 이미지 등록' />
      </ImgLabel>
      <ImgInp onChange={onChangeHandler} id='userImgInp' type='file' />
    </BtnUploadWrapper>
  );
}
