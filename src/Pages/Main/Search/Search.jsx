import React from 'react';
import { UserListWrapper } from './SearchUserItem.style';
import SearchUserItem from './SearchUserItem';
import TabMenu from '../../../Components/Common/TabMenu/TabMenu';
import SearchHeader from '../../../Components/Common/Header/SearchHeader';

function Search() {
  return (
    <>
      <SearchHeader />
      <main>
        <UserListWrapper>
          <SearchUserItem />
          <SearchUserItem />
          <SearchUserItem />
          <SearchUserItem />
          <SearchUserItem />
        </UserListWrapper>
      </main>
      <TabMenu />
    </>
  );
}

export default Search;
