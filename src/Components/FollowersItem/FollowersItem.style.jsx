import styled, { css } from 'styled-components';

const slEllipsis = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
`;

export const Title = styled.strong`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 500;
  ${slEllipsis}
`;

export const Text = styled.p`
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.subText};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  ${slEllipsis}
`;

export const FollowersItemWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  min-width: 0;

  & + li {
    margin-top: 16px;
  }

  & > *:not(${ContentWrapper}) {
    flex-shrink: 0;
  }

  button {
    flex-basis: 58px;
  }
`;
