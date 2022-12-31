import React from 'react';
import { UserWrapper } from './SearchUserItem.style';
// import ProfileThumb from '../../../Components/Common/ProfileThumb/ProfileThumb';
import UserInfo from '../../../Components/Common/UserInfo/UserInfo';

export default function SearchUserItem() {
  return (
    <UserWrapper>
      <UserInfo
        size='large'
        userInfoList={{
          id: 11,
          username: 'test',
          image: '',
        }}
      />
    </UserWrapper>
  );
}
