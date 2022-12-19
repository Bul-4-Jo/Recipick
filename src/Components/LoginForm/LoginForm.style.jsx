import styled from 'styled-components';

export const LoginFormWrapper = styled.div`
  width: 322px;
  margin: 0 auto;
`;

export const InpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 45px;
  gap: 27px;
  text-align: left;
`;

export const InpLabel = styled.label`
  margin-bottom: 5px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const Inp = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginInp = styled.input`
  border-radius: 44px;
  outline: 1px solid ${({ theme }) => theme.colors.border};
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: 14px;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.secondary};
    border: none;
  }
`;
