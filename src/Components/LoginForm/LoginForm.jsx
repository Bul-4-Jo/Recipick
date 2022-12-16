import React from 'react';
import Button from '../Common/Button/Button.style';
import { LoginFormWrapper, InpLabel, InpWrapper, Inp, LoginInp } from './LoginForm.style';

export default function LoginForm() {
  return (
    <LoginFormWrapper>
      <InpWrapper>
        <Inp>
          <InpLabel htmlFor='inpEmail'>이메일</InpLabel>
          <LoginInp id='inpEmail' required />
        </Inp>

        <Inp>
          <InpLabel htmlFor='inpPwd'>비밀번호</InpLabel>
          <LoginInp id='inpPwd' required />
        </Inp>
      </InpWrapper>

      <Button className='large' disabled={true} content='로그인' />
    </LoginFormWrapper>
  );
}
