import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% { 
        opacity: 0;
    }
    100% {
        opacity: 0.6;
    }
`;

const slideUp = keyframes`
    0% {
        transform: translate3d(-50%, 100%,0);
    }
    100% { 
        transform: translate3d(-50%, 0%, -0);
    }
`;

export const BackgroundBlur = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.6;
  background-color: rgb(0, 0, 0);
  animation: ${fadeIn} 1s;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  background-color: ${({ theme }) => theme.colors.ground};
  transform: translate(-50%);
  width: 390px;
  padding: 36px 2px 10px 2px;
  border-radius: 10px 10px 0 0;
  animation: ${slideUp} 0.5s;
  &::before {
    content: '';
    width: 50px;
    height: 4px;
    position: absolute;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const ButtonItem = styled.button`
  text-align: left;
  color: ${({ theme }) => theme.colors.mainText};
  width: 100%;
  padding: 14px 26px;
  font-size: ${({ theme }) => theme.fontSizes.base};
`;
