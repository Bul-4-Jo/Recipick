import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  gap: 8px;

  h2 {
    margin-right: auto;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.mainText};
  }

  h3 {
    margin-right: auto;
    font-size: ${({ theme }) => theme.fontSizes.base};
  }

  button {
    img {
      width: 24px;
    }
  }
`;
