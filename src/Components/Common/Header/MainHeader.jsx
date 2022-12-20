import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import iconSearch from '../../../Assets/Icons/icon_search.png';

const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  z-index: 10;
  background-color: #fff;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 16px;

  strong {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-size: 700;
  }
  a {
    background-color: transparent;
    border: none;
    cursor: pointer;
    img {
      width: 24px;
    }
  }
`;

export default function MainHeader() {
  return (
    <>
      <HeaderWrapper>
        <Div>
          <strong>레시픽 피드</strong>
          <Link to='/search'>
            <img src={iconSearch} alt='검색 페이지로 이동하기 버튼' />
          </Link>
        </Div>
      </HeaderWrapper>
    </>
  );
}
