import styled from 'styled-components';

export const BtnUploadWrapper = styled.div``;

export const ImgLabel = styled.label`
  position: absolute;
  bottom: 0;
  left: 180px;
  width: 36px;
  height: 36px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ImgInp = styled.input`
  display: none;
`;
