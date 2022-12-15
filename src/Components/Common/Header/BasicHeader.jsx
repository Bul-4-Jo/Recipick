import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import iconBack from '../../../Assets/Icons/icon_back.png';
import iconMore from '../../../Assets/Icons/icon_more.png';

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

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export default function BasicHeader() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderWrapper>
        <Div>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            <img src={iconBack} alt='뒤로가기 버튼'></img>
          </button>
          <button>
            <img src={iconMore} alt='더 많은 옵션보기 버튼'></img>
          </button>
        </Div>
      </HeaderWrapper>
    </>
  );
}