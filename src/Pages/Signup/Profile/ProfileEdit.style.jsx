import styled from 'styled-components';

export const ProfileWrapper = styled.section`
  max-width: 780px;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 500;
  margin: 30px 0 12px;
`;

export const DescText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  margin-bottom: 30px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const Input = styled.input`
  width: 322px;
  border: none;
  padding: 10px 5px;
  font-size: ${({ theme }) => theme.fontSizes.base};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  &::placeholder {
    color: ${({ theme }) => theme.colors.border};
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const InpImg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const ImgLabel = styled.label`
  position: absolute;
  bottom: 0;
  left: 180px;
  width: 36px;
  height: 36px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ImgInp = styled.input`
  display: none;
`;
