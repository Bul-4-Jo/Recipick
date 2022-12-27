import styled from 'styled-components';

export const PostFormWrapper = styled.form`
  & > div:last-of-type {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 780px;
    margin: 0 auto;
    pointer-events: none;

    label {
      position: absolute;
      bottom: 76px;
      right: 16px;
      pointer-events: all;
    }
  }
`;
