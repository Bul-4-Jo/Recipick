import React from 'react';
import { BtnDelete, PostImgItem, PostImgWrapper } from './PostImg.style';
import IconDelete from '../../../Assets/Icons/icon_x.png';

export default function PostImg({ response, deleteFile }) {
  return (
    <PostImgWrapper length={response.length}>
      {response &&
        response.map(file => (
          <PostImgItem key={crypto.randomUUID()}>
            <img src={`https://mandarin.api.weniv.co.kr/${file}`} alt='' />
            <BtnDelete onClick={() => deleteFile(file)} type='button'>
              <img src={IconDelete} alt='이미지 삭제' />
            </BtnDelete>
          </PostImgItem>
        ))}
    </PostImgWrapper>
  );
}
