import styled, { css } from 'styled-components';

const setSize = {
  medium: css`
    width: 36px;
    height: 36px;
  `,
  large: css`
    width: 50px;
    height: 50px;
  `,
};

export const BtnUploadWrapper = styled.div``;

export const ImgLabel = styled.label`
  display: block;
  ${({ size }) => setSize[size]}
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
