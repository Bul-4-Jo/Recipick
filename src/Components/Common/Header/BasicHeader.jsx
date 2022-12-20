import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import iconBack from '../../../Assets/Icons/icon_back.png';
import iconMore from '../../../Assets/Icons/icon_more_vertical.png';

const HeaderWrapper = styled.header`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
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
    img {
      width: 24px;
    }
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
            <img src={iconBack} alt='뒤로가기 버튼' />
          </button>
          <button>
            <img src={iconMore} alt='더 많은 옵션보기 버튼' />
          </button>
        </Div>
      </HeaderWrapper>
    </>
  );
}
