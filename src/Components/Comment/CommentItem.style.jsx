import styled, { css } from 'styled-components';

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 20px;
  }
`;
export const UserCommentInfo = styled.div`
  display: flex;
  align-items: flex-start;
`;
const slEllipsis = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
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

export const Title = styled.strong`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 500;
  margin: 5px 0px 6px;
  ${slEllipsis}
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.subText};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding-left: 54px;
  line-height: 1.6rem;
`;

export const UserListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 390px;
  width: 100%;
  box-sizing: border-box;
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

export const Time = styled.time`
  color: ${({ theme }) => theme.colors.subText};
  line-height: 1.8rem;
  display: inline-block;
  &:before {
    content: '·';
    margin: 0px 2px;
  }
`;

export const BtnMoreInfo = styled.button`
  height: 48px;
`;
