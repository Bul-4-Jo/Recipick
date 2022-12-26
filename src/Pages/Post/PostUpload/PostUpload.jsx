import React from 'react';
import { PostUploadWrapper } from './PostUpload.style';
import ProfileThumb from '../../../Components/Common/ProfileThumb/ProfileThumb';
import PostForm from '../../../Components/PostEdit/PostForm/PostForm';

export default function PostUpload() {
  return (
    <PostUploadWrapper>
      <h2 className='screen-out'>레시피 작성</h2>
      <ProfileThumb size='medium' />
      <PostForm id='postContent' />
    </PostUploadWrapper>
  );
}
