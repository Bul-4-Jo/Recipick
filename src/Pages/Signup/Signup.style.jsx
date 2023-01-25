import styled from 'styled-components';

export const SignupWrapper = styled.section`
  margin: 50px auto;
  max-width: 780px;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignupTitle = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin: 30px 0;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  width: 322px;
  border: none;
  padding: 10px 3px;
  font-size: ${({ theme }) => theme.fontSizes.base};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-family: SpoqaHanSans;
  &::placeholder {
    color: ${({ theme }) => theme.colors.border};
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 40px;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  font-size: ${({ theme }) => theme.fontSizes.sx};
  color: ${({ theme }) => theme.colors.warning};
  margin-top: 10px;
  padding-left: 2px;
`;
