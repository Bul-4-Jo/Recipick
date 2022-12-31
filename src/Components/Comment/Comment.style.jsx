import styled from 'styled-components';

export const ContentWrapper = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
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
