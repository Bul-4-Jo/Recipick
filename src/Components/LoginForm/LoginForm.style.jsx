import styled from 'styled-components';

export const LoginFormWrapper = styled.div`
  width: 322px;
  margin: 0 auto;
`;

export const InpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  gap: 20px;
  text-align: left;
`;

export const InpLabel = styled.label`
  margin-bottom: 5px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.subText};
`;

export const Inp = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginInp = styled.input`
  font-family: 'SpoqaHanSans', sans-serif;
  border-radius: 44px;
  outline: 1px solid ${({ theme }) => theme.colors.border};
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: 10px 15px;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.secondary};
    border: none;
  }
`;
