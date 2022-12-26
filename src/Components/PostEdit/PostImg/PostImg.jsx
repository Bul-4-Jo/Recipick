import React from 'react';
import { BtnDelete, PostImgItem, PostImgWrapper } from './PostImg.style';
import IconDelete from '../../../Assets/Icons/icon_x.png';

export default function PostImg() {
  return (
    <PostImgWrapper>
      <PostImgItem>
        <img src='https://cdn.pixabay.com/photo/2018/04/09/18/20/strawberry-3304967_960_720.jpg' alt='레시피1' />
        <BtnDelete type='button'>
          <img src={IconDelete} alt='이미지 삭제' />
        </BtnDelete>
      </PostImgItem>
    </PostImgWrapper>
  );
}
