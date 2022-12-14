import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
// import HeaderContainer from '../../../Components/Common/Header/Header.style';
import { ReactComponent as IconArrowLeft } from '../../../Assets/Icons/svg/icon_arrow_left.svg';
import TabMenu from '../../../Components/Common/TabMenu/TabMenu';

const HeaderContainer = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 48px;
  padding: 0 16px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.border};
`;

const SearchInputBar = styled.input`
  background-color: #f2f2f2;
  width: 100%;
  padding: 7px 16px;
  margin-left: 20px;
  border: none;
  border-radius: 32px;
  :focus {
    outline: none;
  }
`;

function SearchBar() {
  return (
    <>
      <HeaderContainer>
        <IconArrowLeft />
        <SearchInputBar type='text' placeholder='계정 검색' />
      </HeaderContainer>
      <TabMenu />
    </>
  );
}

export default SearchBar;
