import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 200px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const LoginWrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  border-radius: 20px 20px 0 0;
  background-color: ${({ theme }) => theme.colors.ground};
  padding: 50px 38px 60px;
  text-align: center;
`;

export const LoginTitle = styled.h1`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: 31px;
`;

export const LogoTitle = styled.p`
  margin-top: 30px;
  font-weight: 700;
  font-size: 70px;
  color: ${({ theme }) => theme.colors.ground};
`;

export const LogoWrapper = styled.div`
  text-align: center;
`;

export const SignUpLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.subText};
  &:hover {
    color: ${({ theme }) => theme.colors.mainText};
  }
`;
