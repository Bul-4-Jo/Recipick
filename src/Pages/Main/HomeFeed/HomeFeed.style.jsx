import styled from 'styled-components';

export const HomeFeedWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  max-width: 780px;
  height: calc(100% - 108px);
  margin: 0 auto;
`;

export const TextDesc = styled.p`
  color: ${({ theme }) => theme.colors.subText};
  font-size: ${({ theme }) => theme.fontSizes.base};
`;
