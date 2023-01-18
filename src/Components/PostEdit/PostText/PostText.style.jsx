import styled from 'styled-components';

export const PostTextArea = styled.textarea`
  width: 100%;
  line-height: 20px;
  height: 44px;
  padding: 12px 0;
  resize: none;
  color: ${({ theme }) => theme.colors.mainText};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-family: 'SpoqaHanSans', sans-serif;
  outline: none;
  background-color: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;
