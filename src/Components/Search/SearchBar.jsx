import React, { useEffect, useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { SearchInputBar } from './SearchBar.style';
import { toolSearch } from '../../API/api';

const SearchBar = ({ stateFunc }) => {
  const [isRendered, setRendered] = useState(false);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    setRendered(true);
  }, []);

  const handleKeychange = useCallback(
    e => {
      setKeyword(e.target.value);
    },
    [keyword]
  );

  useEffect(() => {
    if (!keyword) return;
    const getResponse = async () => {
      toolSearch(keyword).then(res => stateFunc(res));
    };

    getResponse();
  }, [keyword]);

  const headerInner = document.querySelector('#globalHeader');

  return isRendered
    ? ReactDOM.createPortal(
        <SearchInputBar type='text' placeholder='계정 검색' onChange={handleKeychange} />,
        headerInner
      )
    : null;
};

export default SearchBar;
