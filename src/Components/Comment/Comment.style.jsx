import styled from 'styled-components';

export const ContentWrapper = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
`;

export const CommentSection = styled.div`
  padding: 20px 16px 0;
  margin: 25px auto 0;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CommentListWrapper = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
