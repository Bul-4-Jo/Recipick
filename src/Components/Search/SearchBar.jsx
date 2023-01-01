import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { SearchInputBar } from './SearchBar.style';
import { toolSearch } from '../../API/api';

const baseURL = process.env.REACT_APP_URL;
const userToken = localStorage.getItem('Access Token');
const userAccountName = localStorage.getItem('user ID');

const SearchBar = ({ stateFunc }) => {
  const [ isRendered, setRendered ] = useState(false);
  const [ keyword, setKeyword ] = useState('');

  useEffect(() => {
    setRendered(true);
  }, []);

  const headerInner = document.querySelector('#globalHeader');



  const onChangeKeyword = e => {
    setKeyword(e.target.value);

    toolSearch(keyword).then(res => stateFunc(res))
  };

  return isRendered ? (ReactDOM.createPortal(<SearchInputBar type='text' placeholder='계정 검색' onChange={onChangeKeyword} />, headerInner)
  ) : null;
};

export default SearchBar;
