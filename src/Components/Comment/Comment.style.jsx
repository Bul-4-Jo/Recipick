import styled from 'styled-components';

export const ContentWrapper = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
`;

export const CommentSection = styled.div`
  padding: 20px 16px 0;
  margin: 0 auto;
  width:100%;
  height : calc(30% + 100px);
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  overflow-y: auto;
`;

export const CommentListWrapper = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
