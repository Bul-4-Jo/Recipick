import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FollowersItemWrapper, ContentWrapper, Text, Title } from './FollowersItem.style';
import ProfileThumb from '../Common/ProfileThumb/ProfileThumb';
import Button from '../Common/Button/Button';

export default function FollowersItem({ follower }) {
  const { accountname, username, isfollow, image, intro } = follower;
  const [isFollowing, setIsFollowing] = useState(isfollow);

  const baseURL = process.env.REACT_APP_URL;
  const token = process.env.REACT_APP_TOKEN;

  const instance = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
  });

  const onClickHandler = () => {
    isFollowing ? unFollow() : follow();
  };

  const follow = async () => {
    try {
      const response = await instance.post(`/profile/${accountname}/follow`);

      setIsFollowing(response.data.profile.isfollow);
    } catch (error) {
      console.error(error.message);
    }
  };

  const unFollow = async () => {
    try {
      await instance.delete(`/profile/${accountname}/unfollow`);
      setIsFollowing(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <FollowersItemWrapper>
      <Link to='/'>
        <ProfileThumb size='large' src={image} />
        <ContentWrapper>
          <Title>{username}</Title>
          <Text>{intro}</Text>
        </ContentWrapper>
      </Link>
      {isFollowing ? (
        <Button className='small' content='취소' disabled={false} active onClick={onClickHandler} />
      ) : (
        <Button className='small' content='팔로우' disabled={false} onClick={onClickHandler} />
      )}
    </FollowersItemWrapper>
  );
}
