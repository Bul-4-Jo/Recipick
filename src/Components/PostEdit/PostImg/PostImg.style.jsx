import styled from 'styled-components';

export const PostImgWrapper = styled.div`
  position: relative;
  max-width: 520px;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 4 / 3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BtnDelete = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 22px;
  height: 22px;
`;
