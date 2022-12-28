import styled from 'styled-components';

export const PostAlbumWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  padding: 0 20px 20px;
  background-color: #fff;
`;

export const SingleImg = styled.img`
  max-width: 114px;
  height: 114px;
  object-fit: cover;
`;

export const MultiImg = styled.div`
position: relative;
display: inline-block;
img {
    &.multiImage {
          display: block;
          width: 114px;
          height: 114px;
          object-fit: cover;
        }
        &.layerIcon {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            width: 20px;
  }
`;
