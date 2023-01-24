import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { PostEditWrapper } from './PostEdit.style';
import PostForm from '../../../Components/PostEdit/PostForm/PostForm';
import ProfileThumb from '../../../Components/Common/ProfileThumb/ProfileThumb';
import { getProfile } from '../../../API/api';

export default function PostEdit() {
  const { state } = useLocation();
  const [profileImg, setProfileImg] = useState('');
  const localID = localStorage.getItem('user ID');

  useEffect(() => {
    getProfile(localID).then(response => {
      const { image } = response.profile;

      setProfileImg(prev => image);
    });
  });

  return (
    <>
      <PostEditWrapper>
        <h2 className='screen-out'>레시피 작성</h2>
        <ProfileThumb size='medium' src={profileImg} />
        <PostForm postDetail={state} />
      </PostEditWrapper>
    </>
  );
}
