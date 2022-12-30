import styled from 'styled-components';

export const PostAlbumWrapper = styled.div`
  & > div:first-child {
    margin-top: 16px;
  }
`;

export const AlbumImgItem = styled.div`
  width: 228px;
  position: relative;
  display: inline-block;
  object-fit: cover;
  img {
    &.multiImage {
      display: block;
      width: 228px;
      height: 228px;
    }
    &.layerIcon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 20px;
    }
  }
`;
