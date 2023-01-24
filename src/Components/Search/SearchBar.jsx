import React, { useEffect, useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { SearchInputBar } from './SearchBar.style';
import { toolSearch } from '../../API/api';
import { useDebounce } from '../../Hooks/useDebounce';

const SearchBar = ({ stateFunc }) => {
  const [isRendered, setRendered] = useState(false);
  const [keyword, setKeyword] = useState('');

  const debounceKeyword = useDebounce(keyword, 400);

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
    const abortController = new AbortController();
    const { signal } = abortController;

    if (debounceKeyword) {
      const getResponse = async () => {
        toolSearch(debounceKeyword, signal).then(res => stateFunc(res));
      };

      getResponse();
    } else {
      stateFunc([]);
    }

    return () => abortController.abort();
  }, [debounceKeyword]);

  const headerInner = document.querySelector('#globalHeader');

  return isRendered
    ? ReactDOM.createPortal(
        <SearchInputBar type='text' placeholder='계정 검색' onChange={handleKeychange} />,
        headerInner
      )
    : null;
};

export default SearchBar;
