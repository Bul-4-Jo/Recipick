import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileWrapper, Follow, Followers, Followings, Profile, ButtonWrapper } from './UserProfile.style';
import Button from './../../../../Components/Common/Button/Button.style';
import BasicHeader from './../../../../Components/Common/TabMenu/TabMenu';
// import TabMenu from './../../../../Components/Common/TabMenu/TabMenu';
import ProfileThumb from './../../../../Components/Common/ProfileThumb/ProfileThumb';

export default function UserProfile() {
  return (
    <>
      <BasicHeader />
      <ProfileWrapper>
        <Follow>
          <Followers>
            <strong>2950</strong>
            <p>followers</p>
          </Followers>
          <ProfileThumb />
          <Followings>
            <strong>128</strong>
            <p>followings</p>
          </Followings>
        </Follow>
        <Profile>
          <strong>애월읍 위니브 감귤농장</strong>
          <span>@ weniv_Mandarin</span>
          <p>애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장</p>
        </Profile>
        {/* <ButtonWrapper>
          <Link to='/chat'>홈</Link>
          <Button className='medium'>팔로우</Button>
        </ButtonWrapper>
      </ProfileWrapper> */}
      {/* <TabMenu /> */}
    </>
  );
}
