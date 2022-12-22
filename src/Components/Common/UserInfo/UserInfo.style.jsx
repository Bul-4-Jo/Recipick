import { Link } from 'react-router-dom';
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

export const Title = styled.strong`
  display: block;
  line-height: 1.8rem;
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 500;
  ${slEllipsis}
`;

export const Text = styled.p`
  min-height: ${({ theme, size }) => (size === 'small' ? '8px' : theme.fontSizes.sm)};
  color: ${({ theme }) => theme.colors.subText};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  ${slEllipsis}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  ${({ size }) => setSize[size]}
`;

export const UserInfoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;

  & > :first-child {
    flex-shrink: 0;
  }
`;
