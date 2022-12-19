import styled from 'styled-components';

export const ProfileImgWrapper = styled.div`
  display: inline-block;
  position: relative;
  text-align: center;
  margin: 30px auto;
  img {
    width: 110px;
  }
  button {
    cursor: pointer;
    position: absolute;
    right: 0;
    bottom: 0;
    img {
      width: 36px;
    }
  }
`;
