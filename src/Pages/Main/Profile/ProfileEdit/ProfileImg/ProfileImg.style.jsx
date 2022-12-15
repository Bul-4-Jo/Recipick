import styled from 'styled-components';

export const ProfileImgWrapper = styled.div`
  position: relative;
  text-align: center;
  margin: 30px auto;
  img {
    width: 110px;
  }
  button {
    cursor: pointer;
    position: absolute;
    bottom: 0;
    img {
      width: 36px;
    }
  }
`;
