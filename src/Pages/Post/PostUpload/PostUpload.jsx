import React, { useEffect, useState } from 'react';
import { PostUploadWrapper } from './PostUpload.style';
import ProfileThumb from '../../../Components/Common/ProfileThumb/ProfileThumb';
import PostForm from '../../../Components/PostEdit/PostForm/PostForm';
import { getMyInfo } from '../../../API/api';

export default function PostUpload() {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    getMyInfo().then(response => setUserInfo(response.user));
  }, []);

  return (
    <PostUploadWrapper>
      <h2 className='screen-out'>레시피 작성</h2>
      {userInfo && <ProfileThumb size='medium' src={userInfo.image} />}
      <PostForm id='postContent' />
    </PostUploadWrapper>
  );
}
