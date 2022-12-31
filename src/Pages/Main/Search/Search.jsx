import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { SearchBar } from './SearchBar';
import { UserWrapper } from '../../../Components/Search/SearchUserItem.style';
import { SearchWrapper, UserListWrapper } from './Search.style';

// const baseURL = process.env.REACT_APP_URL;
// const userToken = process.env.REACT_APP_TOKEN;
// const userAccountName = process.env.REACT_APP_ACCOUNT_NAME;

// const instance = axios.create({
//   baseURL,
//   headers: {
//     Authorization: `Bearer ${userToken}`,
//     'Content-type': 'application/json',
//   },
// });

function Search() {
  // const [ searchList, setSearchList ] = useState([]);
  // const [ keyword, setKeyword ] = useState('');
  // // const [ users, setUsers ] = useState([]);

  // useEffect(() => {
  //   if (!keyword.length) return;

  //   const searchUsers = async () => {
  //     const { response } = await instance.get(`/user/searchuser/?keyword=${keyword}`);

  //     setSearchList(response);
  //   };

  //   searchUsers();
  // }, [ keyword ]);

  return (
    <>
      <SearchWrapper>
        <UserListWrapper>
          <UserWrapper />
        </UserListWrapper>
      </SearchWrapper>
    </>
  );
}

export default Search;
