import styled from 'styled-components';

export const ProductWrapper = styled.section`
  padding: 20px 0;

  h3 {
    margin-bottom: 16px;
    padding-left: 16px;
    color: ${({ theme }) => theme.colors.mainText};
    font-size: ${({ theme }) => theme.fontSizes.ms};
    font-weight: 700;
  }
`;

export const ProductList = styled.ul`
  display: flex;
  gap: 10px;
  padding-left: 16px;
`;
