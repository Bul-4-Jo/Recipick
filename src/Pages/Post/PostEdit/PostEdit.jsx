import React from 'react';
import { useLocation } from 'react-router-dom';
import { PostEditWrapper } from './PostEdit.style';
import PostForm from '../../../Components/PostEdit/PostForm/PostForm';
import ProfileThumb from '../../../Components/Common/ProfileThumb/ProfileThumb';

export default function PostEdit() {
  const { state } = useLocation();

  return (
    <>
      <PostEditWrapper>
        <h2 className='screen-out'>레시피 작성</h2>
        <ProfileThumb size='medium' />
        <PostForm postDetail={state} />
      </PostEditWrapper>
    </>
  );
}
