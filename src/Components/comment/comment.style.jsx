import styled from 'styled-components';
import ProfileThumb from '../Common/ProfileThumb/ProfileThumb';

export const AuthorPost = styled.article`
  width: 360px;
  max-width: 360px;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  cursor: pointer;
`;

export const CommentSection = styled.section`
  padding: 20px 16px 0;
  margin: 0 auto;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CommentList = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const CommentItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  margin-bottom: 16px;

  & > *:not(${ContentWrapper}) {
    flex-shrink: 0;
  }
`;
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
  width: calc(100% - 100px);
  margin: 4px;
  border: none;
`;
