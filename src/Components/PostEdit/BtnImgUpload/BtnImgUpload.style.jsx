import styled from 'styled-components';

export const BtnImgUploadWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 780px;
  margin: 0 auto;
  pointer-events: none;

  div {
    position: absolute;
    bottom: 86px;
    right: 16px;
  }

  label {
    display: block;
    width: 50px;
    height: 50px;
    cursor: pointer;
    pointer-events: visible;

    img {
      width: 100%;
      height: auto;
    }
  }

  input[type='file'] {
    display: none;
  }
`;
