import styled from 'styled-components';

export const ProductWrapper = styled.section`
  padding: 20px 20px 0;
  overflow: hidden;

  h3 {
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.mainText};
    font-size: ${({ theme }) => theme.fontSizes.ms};
    font-weight: 700;
  }
`;

export const ProductListWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  border-radius: 8px;
`;

export const ProductList = styled.ul`
  display: flex;
  gap: 10px;
  padding-bottom: 20px;
`;
