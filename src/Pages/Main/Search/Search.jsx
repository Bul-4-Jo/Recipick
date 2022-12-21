import React from 'react';
import { UserListWrapper } from './SearchUserItem.style';
import UserInfo from '../../../Components/Common/UserInfo/UserInfo';
import { SearchWrapper } from './Search.style';

function Search() {
  return (
    <>
      <SearchWrapper>
        <UserListWrapper>
          <UserInfo
            size='large'
            userInfoList={{
              id: 11,
              username: 'test',
              image: '',
            }}
            text='testtesttestt testtest testtest testtesttesttest testtesttesttesttesttest testtesttesttesttesttesttesttesttesttesttesttesttestasdfsdfsdfsdfdfagervdf'
          />
          <UserInfo
            size='large'
            userInfoList={{
              id: 11,
              username: 'test',
              image: '',
            }}
          />
          <UserInfo
            size='large'
            userInfoList={{
              id: 11,
              username: 'test',
              image: '',
            }}
          />
          <UserInfo
            size='large'
            userInfoList={{
              id: 11,
              username: 'test',
              image: '',
            }}
          />
          <UserInfo
            size='large'
            userInfoList={{
              id: 11,
              username: 'test',
              image: '',
            }}
          />
        </UserListWrapper>
      </SearchWrapper>
    </>
  );
}

export default Search;
