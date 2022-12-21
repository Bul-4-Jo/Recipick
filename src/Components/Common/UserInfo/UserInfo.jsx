import React from 'react';
import { Link } from 'react-router-dom';
import ProfileThumb from '../ProfileThumb/ProfileThumb';
import { FollowersItemWrapper, ContentWrapper, Text, Title } from './UserInfo.style';

export default function UserInfo({ children, userInfoList, size, text }) {
  const { id, username, image } = userInfoList;

  return (
    <FollowersItemWrapper>
      <Link to={`/profile/${id}`}>
        <ProfileThumb size={size} src={image} />
        <ContentWrapper size={size}>
          <Title>{username}</Title>
          <Text>{text}</Text>
        </ContentWrapper>
      </Link>
      {children}
    </FollowersItemWrapper>
  );
}
