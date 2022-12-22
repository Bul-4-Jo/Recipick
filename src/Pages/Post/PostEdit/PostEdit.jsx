import React from 'react';
import { PostEditWrapper } from './PostEdit.style';
import BtnImgUpload from './../../../Components/PostEdit/BtnImgUpload/BtnImgUpload';
import PostForm from '../../../Components/PostEdit/PostForm/PostForm';
import ProfileThumb from '../../../Components/Common/ProfileThumb/ProfileThumb';

export default function PostEdit() {
  return (
    <>
      <PostEditWrapper>
        <h2 className='screen-out'>레시피 작성</h2>
        <ProfileThumb size='medium' />
        <PostForm />
        <BtnImgUpload />
      </PostEditWrapper>
    </>
  );
}
