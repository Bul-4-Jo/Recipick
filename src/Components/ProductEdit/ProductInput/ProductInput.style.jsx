import styled from 'styled-components';

export const ProductInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  label {
    margin-bottom: 2px;
    color: ${({ theme }) => theme.colors.subText};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;
  }

  input {
    margin-bottom: 16px;
    padding: 8px 0;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    outline: none;
    color: ${({ theme }) => theme.colors.mainText};
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-family: 'SpoqaHanSans';

    &::placeholder {
      color: ${({ theme }) => theme.colors.background};
    }
  }
`;
