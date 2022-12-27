import styled from 'styled-components';

export const PostTagWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  padding-top: 9px;

  input {
    flex: 1 1 auto;
    line-height: 26px;
    padding: 0;
    border: none;
    outline: none;
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-family: 'SpoqaHanSans', sans-serif;

    &::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }
  }
`;

export const PostTagItem = styled.button`
  display: flex;
  align-items: center;
  gap: 2px;
  line-height: 24px;
  padding: 0 8px;
  border-radius: 26px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  word-break: keep-all;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  img {
    width: 14px;
    height: 14px;
  }
`;
