import React from 'react';
import { UserListWrapper, UserWrapper } from './SearchUserItem.style';
import UserInfo from '../../../Components/Common/UserInfo/UserInfo';
import { SearchWrapper } from './Search.style';

function Search() {
  return (
    <>
      <SearchWrapper>
        <UserListWrapper>
          <UserWrapper>
            <UserInfo
              size='large'
              userInfoList={{
                id: 11,
                username: 'test',
                image: '',
              }}
              text='testtesttestt testtest testtest testtesttesttest testtesttesttesttesttest testtesttesttesttesttesttesttesttesttesttesttesttestasdfsdfsdfsdfdfagervdf'
            />
          </UserWrapper>
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
        </UserListWrapper>
      </SearchWrapper>
    </>
  );
}

export default Search;
