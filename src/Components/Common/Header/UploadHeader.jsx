import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import iconBack from '../../../Assets/Icons/icon_back.png';
import Button from '../Button/Button';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: #fff;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export default function UploadHeader() {
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
        </Div>
        <Button className='mediumSmall' disabled={true} content='저장' />
      </HeaderWrapper>
    </>
  );
}
