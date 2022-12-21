import React from 'react';
import { InfoWrapper, UserInfo, User } from './PostContent.style';
import ProfileThumb from '../../Components/Common/ProfileThumb/ProfileThumb';
import iconMore from '../../Assets/Icons/icon_more_vertical.png';
import PostForm from '../../Components/PostEdit/PostForm/PostForm';
import PostImg from '../../Components/PostEdit/PostImg/PostImg';

export default function PostContent() {
  return (
    <>
      <InfoWrapper>
        <UserInfo>
          <ProfileThumb size='medium' />
          <User>
            <p>애월읍 위니브 감귤농장</p>
            <span>@weniv_Mandarin</span>
          </User>
        </UserInfo>
        <img src={iconMore} alt='더 많은 옵션 보기 버튼' />
      </InfoWrapper>
      <PostForm />
    </>
  );
}
