import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 100px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const LoginWrapper = styled.section`
  margin: 0 auto;
  border-radius: 20px 20px 0 0;
  background-color: ${({ theme }) => theme.colors.ground};
  padding: 30px 38px 30px;
  text-align: center;
`;

export const LoginTitle = styled.h1`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: 31px;
`;

export const LogoWrapper = styled.div`
  text-align: center;
  width: 30vw;
  max-width: 160px;
  margin: 0 auto;
`;

export const SignUpLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.base};
  display: inline-block;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.subText};
  &:hover {
    color: ${({ theme }) => theme.colors.mainText};
  }
`;
