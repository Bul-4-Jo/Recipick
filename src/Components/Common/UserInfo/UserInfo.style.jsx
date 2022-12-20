import styled, { css } from 'styled-components';

const setSize = {
  small: css`
    gap: 3px;
  `,
  medium: css`
    gap: 6px;
  `,
  large: css`
    gap: 6px;
  `,
};

const slEllipsis = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  ${({ size }) => setSize[size]}
`;

export const Title = styled.strong`
  display: block;
  line-height: 1.8rem;
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 500;
  ${slEllipsis}
`;

export const Text = styled.p`
  min-height: 20px;
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

  a {
    display: flex;
    gap: 12px;
    flex: 1 1 auto;
    overflow: hidden;

    & > :first-child {
      flex-shrink: 0;
    }
  }

  button {
    flex: 0 0 58px;
  }
`;
