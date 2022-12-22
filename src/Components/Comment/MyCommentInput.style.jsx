import styled from 'styled-components';

export const CommentInputBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  width: 100%;
  gap: 14px;
  height: 60px;
  padding: 0 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CommentInput = styled.input`
  font-family: 'SpoqaHanSans', sans-serif;
  width: calc(100% - 100px);
  margin: 4px;
  border: none;
  &:focus {
    outline: none;
  }
`;
