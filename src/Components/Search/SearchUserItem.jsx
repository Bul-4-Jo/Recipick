import React from 'react';
import { UserWrapper } from './SearchUserItem.style';
import UserInfo from '../Common/UserInfo/UserInfo';

export default function SearchUserItem({ userName = '', userId = '', userImage = '' }) {
  return (
    <UserWrapper>
      <UserInfo
        size='large'
        userInfoList={{
          username: userName,
          accountname: userId,
          image: userImage,
        }}
        text={`@ ${userId}`}
      />
    </UserWrapper>
  );
}
