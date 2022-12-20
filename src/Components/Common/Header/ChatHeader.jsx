import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import iconBack from '../../../Assets/Icons/icon_arrow_left.png';
import iconMore from '../../../Assets/Icons/icon_more_vertical.png';

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
  align-items: center;
  justify-content: space-between;
  height: 48px;
  padding: 0 16px;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    img {
      width: 24px;
    }
  }
  strong {
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 700;
  }
`;
const Btn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  img {
    width: 24px;
  }
`;

export default function ChatHeader() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderWrapper>
        <Div>
          <Left>
            <button
              onClick={() => {
                navigate(-1);
              }}
            >
              <img src={iconBack} alt='뒤로가기 버튼' />
            </button>
            <strong>유저 이름</strong>
          </Left>
          <Btn>
            <img src={iconMore} alt='더 많은 옵션보기 버튼' />
          </Btn>
        </Div>
      </HeaderWrapper>
    </>
  );
}
