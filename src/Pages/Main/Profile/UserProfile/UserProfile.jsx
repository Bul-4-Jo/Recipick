import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
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
import Modal from '../../../../Components/Common/Modal/Modal';

export default function UserProfile() {
  const userId = localStorage.getItem('user ID');
  const { isModal } = useOutletContext();
  const listObj = [
    {
      name: '설정 및 개인정보',
      func: () => console.log('설정 및 개인정보'),
    },
    {
      name: '로그아웃',
      func: () => console.log('로그아웃'),
    },
  ];

  return (
    <>
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
        <Product accountName={userId} />
        <GetPost />
        <PostCard />
      </UserProfileWrapper>
      {isModal && <Modal listObj={listObj} />}
    </>
  );
}
