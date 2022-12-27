import styled, { css } from 'styled-components';

export const PostImgWrapper = styled.ul`
  ${({ length }) =>
    length > 1 &&
    css`
      display: flex;
      gap: 8px;
      overflow-y: auto;

      > * {
        flex: 1 0 168px;
      }
    `}
`;

export const PostImgItem = styled.li`
  position: relative;
  max-width: 358px;
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
