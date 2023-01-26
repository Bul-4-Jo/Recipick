import styled from 'styled-components';

export const BtnDarkModeWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 780px;
  margin: 0 auto;
  pointer-events: none;

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 76px;
    right: 16px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    pointer-events: all;
    user-select: none;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  input {
    display: none;
  }
`;
