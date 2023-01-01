import React, { useEffect, useState } from 'react';
import { json, Link } from 'react-router-dom';
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
import { getProfile, unFollow, follow } from '../../../../API/api';

export default function UserProfile() {
  // 유저 프로필 정보 가져오기
  const [ userId, setUserId ] = useState('');
  const [ name, setName ] = useState('');
  const [ introduce, setIntroduce ] = useState('');
  const [ profileImg, setProfileImg ] = useState('');
  const [ follower, setFollower ] = useState('');
  const [ following, setFollowing ] = useState('');
  const [ isFollowing, setIsFollowing ] = useState();

  const followClickHandler = () => {
    if (isFollowing) {
      unFollow(name).then(response => setIsFollowing(response));
    } else {
      follow(name).then(response => setIsFollowing(response));
    }
  };

  useEffect(() => {
    getProfile(process.env.REACT_APP_ACCOUNT_NAME).then(response => {
      const { accountname, username, intro, image, followerCount, followingCount, isfollow } = response.profile;

      setUserId(prev => username);
      setName(prev => accountname);
      setIntroduce(prev => intro);
      setProfileImg(prev => image);
      setFollower(prev => followerCount);
      setFollowing(prev => followingCount);
      setIsFollowing(isfollow);
    });
  }, []);

  return (
    <>
      <UserProfileWrapper>
        <ProfileWrapper>
          <Follow>
            <Followers>
              <Link to={`/profile/${name}/followers`}>
                <strong>{follower}</strong>
                <p>followers</p>
              </Link>
            </Followers>
            <ProfileThumb size='xlarge' src={profileImg} />
            <Followings>
              <Link to={`/profile/${name}/following`}>
                <strong>{following}</strong>
                <p>followings</p>
              </Link>
            </Followings>
          </Follow>
          <Profile>
            <strong>{userId}</strong>
            <span>@ {name}</span>
            <p>{introduce}</p>
          </Profile>
          <ButtonWrapper>
            <Link to='/chat'>
              <img src={iconChat} alt='채팅하기 버튼' />
            </Link>
            {isFollowing ? (
              <Button className='medium' content='취소' disabled={false} active onClick={followClickHandler} />
            ) : (
              <Button className='medium' content='팔로우' disabled={false} onClick={followClickHandler} />
            )}
            {/* Share 컴포넌트로 대체할 것임.. */}
            <Link to='/chat'>
              <img src={iconShare} alt='채팅하기 버튼' />
            </Link>
          </ButtonWrapper>
        </ProfileWrapper>
        <Product accountName={name} />
        <GetPost userId={name} />
      </UserProfileWrapper>
    </>
  );
}
