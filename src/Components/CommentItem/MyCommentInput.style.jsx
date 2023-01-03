import styled from 'styled-components';

export const CommentInputBox = styled.form`
  display: flex;
  align-items: center;
  margin-top: auto;
  width: 100%;
  gap: 16px;
  height: 60px;
  padding:4px 12px; 
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  &> button {
    min-width:60px ;
    white-space: nowrap;
  }
`;

export const CommentInput = styled.input`
  font-family: 'SpoqaHanSans', sans-serif;
  width: calc(100% - 108px);
  margin: 4px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  min-width: 0;

  & + div {
    margin-top: 16px;
  }
  & > *:not(${ContentWrapper}) {
    flex-shrink: 0;
  }
`;
