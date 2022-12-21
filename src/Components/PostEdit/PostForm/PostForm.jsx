import React from 'react';
import { PostFormWrapper } from './PostForm.style';
import PostImg from '../PostImg/PostImg';

export default function PostForm() {
  const resize = e => {
    e.target.style.height = '1px';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <PostFormWrapper>
      <label className='screen-out' htmlFor='txtRecipe'>
        레시피 입력
      </label>
      <textarea onChange={resize} id='txtRecipe' placeholder='레시피 입력하기...'></textarea>

      <PostImg />
    </PostFormWrapper>
  );
}
