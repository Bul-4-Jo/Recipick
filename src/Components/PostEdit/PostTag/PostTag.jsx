import React from 'react';
import { PostTagItem, PostTagWrapper } from './PostTag.style';
import IconDelete from '../../../Assets/Icons/icon_x_dark.png';

export default function PostTag() {
  return (
    <PostTagWrapper>
      <PostTagItem type='button'>
        재료1 <img src={IconDelete} alt='이미지 삭제' />
      </PostTagItem>
      <label className='screen-out' htmlFor='txtTag'>
        재료 입력
      </label>
      <input type='text' id='txtTag' placeholder='엔터키로 재료를 추가하기...'></input>
    </PostTagWrapper>
  );
}
