import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchInputBar } from './SearchBar.style';

const baseURL = process.env.REACT_APP_URL;
const userToken = process.env.REACT_APP_TOKEN;
const userAccountName = process.env.REACT_APP_ACCOUNT_NAME;

const instance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${userToken}`,
    'Content-type': 'application/json',
  },
});
const SearchBar = (/* { setKeyword } */) => {
  const onChangeKeyword = e => {
    setKeyword(e.target.value);
  };
  const [ keyword, setKeyword ] = useState('');
  const [ searchList, setSearchList ] = useState([]);
  // const [ users, setUsers ] = useState([]);

  useEffect(() => {
    if (!keyword.length) return;

    const searchUsers = async () => {
      const { response } = await instance.get(`/user/searchuser/?keyword=${keyword}`);

      setSearchList(response);
    };

    searchUsers();
  }, [ keyword ]);
  return (
    <>
      <SearchInputBar type='text' placeholder='계정 검색' onChange={onChangeKeyword} />
    </>
  );
};

export default SearchBar;
