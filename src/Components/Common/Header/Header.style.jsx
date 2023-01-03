import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: #fff;
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
    font-size: 700;
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
