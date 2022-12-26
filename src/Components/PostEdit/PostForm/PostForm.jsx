import React from 'react';
import { PostFormWrapper } from './PostForm.style';
import BtnUpload from '../../Common/BtnUpload/BtnUpload';
import PostImg from '../PostImg/PostImg';
import PostTag from '../PostTag/PostTag';
import PostText from '../PostText/PostText';

export default function PostForm() {
  return (
    <PostFormWrapper id='postContent'>
      <PostTag />
      <PostText />
      <PostImg />
      <BtnUpload size='large' />
    </PostFormWrapper>
  );
}
