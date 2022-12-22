import React from 'react';
import { Link } from 'react-router-dom';
import {
  ProfileWrapper,
  Follow,
  Followers,
  Followings,
  Profile,
  ButtonWrapper,
  UserProfileWrapper,
} from './UserProfile.style';
import Button from './../../../../Components/Common/Button/Button';
import ProfileThumb from './../../../../Components/Common/ProfileThumb/ProfileThumb';
import iconChat from '../../../../Assets/Icons/icon_chat.png';
import iconShare from '../../../../Assets/Icons/icon_share.png';
import Product from '../../../../Components/Product/Product';
import GetPost from '../../../../Components/Common/GetPost/GetPost';
import PostCard from '../../../../Components/Common/PostCard/PostCard';

export default function UserProfile() {
  return (
    <UserProfileWrapper>
      <ProfileWrapper>
        <Follow>
          <Followers>
            <Link to='/follow/follower'>
              <strong>2950</strong>
              <p>followers</p>
            </Link>
          </Followers>
          <ProfileThumb size='xlarge' />
          <Followings>
            <Link to='/follow/following'>
              <strong>128</strong>
              <p>followings</p>
            </Link>
          </Followings>
        </Follow>
        <Profile>
          <strong>애월읍 위니브 감귤농장</strong>
          <span>@ weniv_Mandarin</span>
          <p>애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장</p>
        </Profile>
        <ButtonWrapper>
          <Link to='/chat'>
            <img src={iconChat} alt='채팅하기 버튼' />
          </Link>
          <Button className='medium' disabled={false} content='팔로우' />
          {/* Share 컴포넌트로 대체할 것임.. */}
          <Link to='/chat'>
            <img src={iconShare} alt='채팅하기 버튼' />
          </Link>
        </ButtonWrapper>
      </ProfileWrapper>
      <Product />
      <GetPost />
      <PostCard />
    </UserProfileWrapper>
  );
}
