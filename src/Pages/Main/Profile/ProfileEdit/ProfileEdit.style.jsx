import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow-y: auto;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.subText};
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  font-family: 'SpoqaHanSans', sans-serif;
  width: 322px;
  border: none;
  padding: 10px 3px;
  font-size: ${({ theme }) => theme.fontSizes.base};
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.mainText};
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  &::placeholder {
    color: ${({ theme }) => theme.colors.background};
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 40px;
`;

export const InpImg = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  font-size: ${({ theme }) => theme.fontSizes.sx};
  color: ${({ theme }) => theme.colors.warning};
  margin-top: 10px;
  padding-left: 2px;
`;
