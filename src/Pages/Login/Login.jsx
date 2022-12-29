import React from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm';
import { ReactComponent as Logo } from '../../Assets/Images/logo.svg';
import { PageWrapper, LoginWrapper, LoginTitle, LogoWrapper, SignUpLink } from './Login.style';

export default function Login() {
  return (
    <PageWrapper>
      <LogoWrapper>
        <Logo width='100%' height='100%' />
      </LogoWrapper>
      <LoginWrapper>
        <LoginTitle>로그인</LoginTitle>
        <LoginForm />
        <SignUpLink to='/join'>이메일로 회원가입</SignUpLink>
      </LoginWrapper>
    </PageWrapper>
  );
}
