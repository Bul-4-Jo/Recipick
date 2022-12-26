import React from 'react';
import axios from 'axios';
import { BtnUploadWrapper, ImgInp, ImgLabel } from './BtnUpload.style';
import ImgBtnUpload from '../../../Assets/Images/btn_upload_file_mainColor.png';

const imgAxios = axios.create({
  baseURL: 'https://mandarin.api.weniv.co.kr',
  headers: { 'Content-type': 'multipart/form-data' },
});

export default function BtnUpload({ stateFunc }) {
  const submitImg = async e => {
    const value = e.target.files[0];

    console.log(value);
    const formData = new FormData();

    formData.append('image', value);

    const response = await imgAxios.post('/image/uploadfile', formData);

    if (!response.data) {
      console.log('이미지 입력 실패');
      stateFunc('');
    } else {
      console.log(response.data.filename);
      stateFunc(`https://mandarin.api.weniv.co.kr/${response.data.filename}`);
    }
  };

  return (
    <BtnUploadWrapper>
      <ImgLabel htmlFor='userImgInp'>
        <img src={ImgBtnUpload} alt='유저 이미지 등록' />
      </ImgLabel>
      <ImgInp id='userImgInp' type='file' onChange={submitImg} />
    </BtnUploadWrapper>
  );
}
