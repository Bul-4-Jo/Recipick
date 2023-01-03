import React, { useEffect, useState } from 'react';

import SearchUserItem from '../../../Components/Search/SearchUserItem';
import { SearchWrapper, UserListWrapper } from './Search.style';
import SearchBar from '../../../Components/Search/SearchBar';

function Search() {
  const [searchList, setSearchList] = useState([]);

  return (
    <>
      <SearchWrapper>
        <UserListWrapper>
          {searchList &&
            searchList.map(userItem => {
              return (
                <SearchUserItem
                  userId={userItem.accountname}
                  userName={userItem.username}
                  userImage={userItem.image}
                  key={crypto.randomUUID()}
                />
              );
            })}
        </UserListWrapper>
      </SearchWrapper>
      <SearchBar stateFunc={setSearchList} />
    </>
  );
}

export default Search;
