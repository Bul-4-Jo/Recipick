import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../Common/Button/Button';
import { LoginFormWrapper, InpLabel, InpWrapper, Inp, LoginInp, ErrorMessage } from './LoginForm.style';

const loginAxios = axios.create({
  baseURL: 'https://mandarin.api.weniv.co.kr/user',
  headers: { 'Content-type': 'application/json' },
});

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [isBtnActive, setIsBtnActive] = useState(true);

  const changeHandler = e => {
    const value = e.target.value;

    if (e.target.type === 'email') {
      setEmail(prev => value);
      emailValidation(value);
    } else if (e.target.type === 'password') {
      setPassword(prev => value);
    }
  };

  const emailValidation = emailValue => {
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (!emailRegex.test(emailValue)) {
      setEmailError(prev => {
        if (emailValue === '') return '';
        else return '옳바른 이메일 형식이 아닙니다.';
      });
    } else {
      setEmailError('');
    }
  };

  const submitLogin = async e => {
    e.preventDefault();
    console.log('submit login');
    try {
      const response = await loginAxios.post('/login', {
        user: {
          email,
          password,
        },
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!!email && !!password && !emailError) {
      setIsBtnActive(false);
    } else {
      setIsBtnActive(true);
    }
  }, [email, password, emailError]);

  return (
    <LoginFormWrapper onSubmit={submitLogin}>
      <InpWrapper>
        <Inp>
          <InpLabel htmlFor='inpEmail'>이메일</InpLabel>
          <LoginInp id='inpEmail' type='email' onChange={changeHandler} required />
          <ErrorMessage>{emailError}</ErrorMessage>
        </Inp>

        <Inp>
          <InpLabel htmlFor='inpPwd'>비밀번호</InpLabel>
          <LoginInp id='inpPwd' type='password' onChange={changeHandler} required />
        </Inp>
      </InpWrapper>

      <Button className='large' disabled={isBtnActive} content='로그인' />
    </LoginFormWrapper>
  );
}
