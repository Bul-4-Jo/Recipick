import styled from 'styled-components';

export const PostFormWrapper = styled.article`
  textarea {
    width: 100%;
    line-height: 20px;
    height: 44px;
    padding: 12px 0;
    resize: none;
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-family: 'SpoqaHanSans', sans-serif;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }
  }
`;
