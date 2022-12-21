import styled from 'styled-components';

export const BtnImgUploadWrapper = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;

  label {
    display: block;
    width: 50px;
    height: 50px;
    cursor: pointer;

    img {
      width: 100%;
      height: auto;
    }
  }

  input[type='file'] {
    display: none;
  }
`;
