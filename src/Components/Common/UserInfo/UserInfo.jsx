import React from 'react';
import ProfileThumb from '../ProfileThumb/ProfileThumb';
import { UserInfoWrapper, ContentWrapper, Text, Title } from './UserInfo.style';

export default function UserInfo({ userInfoList, size, text }) {
  const { accountname, username, image } = userInfoList;

  return (
    <UserInfoWrapper to={`/profile/${username}`}>
      <ProfileThumb size={size} src={image} />
      <ContentWrapper size={size}>
        <Title>{accountname}</Title>
        <Text size={size}>{text}</Text>
      </ContentWrapper>
    </UserInfoWrapper>
  );
}
