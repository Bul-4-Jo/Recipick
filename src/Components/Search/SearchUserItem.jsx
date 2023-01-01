import React from 'react';
import { UserWrapper } from './SearchUserItem.style';
import UserInfo from '../Common/UserInfo/UserInfo';

export default function SearchUserItem({ userId = '', userName = '', userImage = '' }) {
  return (
    <UserWrapper>
      <UserInfo
        size='large'
        userInfoList={{
          accountname: userId,
          username: userName,
          image: userImage,
        }}
      />
    </UserWrapper>
  );
}
