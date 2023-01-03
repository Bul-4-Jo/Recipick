import styled from 'styled-components';

export const SearchInputBar = styled.input`
  font-family: 'SpoqaHanSans', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  background-color: ${({ theme }) => theme.colors.subBackground};
  width: 100%;
  padding: 7px 16px;
  margin-left: 20px;
  border: none;
  border-radius: 32px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;
