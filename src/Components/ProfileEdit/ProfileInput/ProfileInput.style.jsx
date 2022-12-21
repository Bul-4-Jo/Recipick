import styled from 'styled-components';

export const ProfileInputWrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin: 17px 0 10px;
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.subText};
    &:first-child {
      margin-top: 0;
    }
  }
  input {
    font-family: 'SpoqaHanSans', sans-serif;
    padding-bottom: 8px;
    border: none;
    border-right: 0px;
    border-top: 0px;
    border-left: 0px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    &:focus {
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    }
    &::placeholder {
      color: ${({ theme }) => theme.colors.border};
    }
  }
`;
