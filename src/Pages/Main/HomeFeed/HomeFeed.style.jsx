import styled, { css } from 'styled-components';

export const HomeFeedWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${({ length }) =>
    length === 0
      ? css`
          justify-content: center;
          gap: 20px;
        `
      : `justify-content: flex-start;`}

  & > section {
    width: 100%;
  }
`;

export const TextDesc = styled.p`
  color: ${({ theme }) => theme.colors.subText};
  font-size: ${({ theme }) => theme.fontSizes.base};
`;
