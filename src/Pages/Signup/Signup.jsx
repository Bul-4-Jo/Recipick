import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Common/Button/Button';
import { SignupWrapper, SignupTitle, Input, InputWrapper, Label, ErrorMessage } from './Signup.style';

const emailAxios = axios.create({
  baseURL: 'https://mandarin.api.weniv.co.kr/user',
  headers: { 'Content-type': 'application/json' },
});

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pwCheck, setPwCheck] = useState('');

  const [emailError, setEmailError] = useState('');
  const [pwError, setPwError] = useState('');
  const [pwCheckError, setPwCheckError] = useState('');
  const [isBtnActive, setIsBtnActive] = useState(true);

  const navigate = useNavigate();

  const emailValidation = e => {
    const value = e.target.value;

    setEmail(prev => value);
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (!emailRegex.test(value)) {
      setEmailError(prev => {
        if (value === '') return '';
        else return '올바른 이메일 형식이 아닙니다.';
      });
    } else {
      setEmailError('');
    }
  };

  const pwValidation = e => {
    const value = e.target.value;

    setPassword(prev => value);

    if (value.length < 6) {
      if (value === '') {
        setPwError('');
      } else {
        setPwError('6자 이상 입력');
      }
    } else {
      setPwError('');
    }
  };

  const pwCheckValidation = e => {
    const value = e.target.value;

    setPwCheck(prev => value);
    console.log('pw', password, 'c', value);
    if (password === value) {
      setPwCheckError('');
    } else if (value === '') {
      setPwCheckError('');
    } else {
      setPwCheckError('비밀번호를 확인해주세요');
    }
  };

  useEffect(() => {
    console.log(emailError, pwError, pwCheckError);
    if (!emailError && !pwError && !pwCheckError) {
      if (!!email && !!password && !!pwCheck) {
        setIsBtnActive(prev => false);
      } else {
        setIsBtnActive(prev => true);
      }
    } else {
      setIsBtnActive(prev => true);
    }
  }, [email, password, pwCheck, emailError, pwError, pwCheckError]);

  const submitEmail = async e => {
    e.preventDefault();
    console.log('submit');
    try {
      const response = await emailAxios.post('/emailvalid', { user: { email } });

      if (response.data.message === '사용 가능한 이메일 입니다.') {
        console.log('사용가능');
        navigate('/profileset', { state: { email, password } });
      } else if (response.data.message === '이미 가입된 이메일 주소 입니다.') {
        setEmailError('이미 가입된 계정ID 입니다.');
      } else if (response.data.message === '잘못된 접근입니다.') {
        console.log('잘못된 접근입니다.');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SignupWrapper>
      <SignupTitle>이메일로 회원가입</SignupTitle>
      <form onSubmit={submitEmail}>
        <InputWrapper>
          <Label htmlFor='inpEmail'>이메일</Label>
          <Input
            id='inpEmail'
            type='email'
            onChange={emailValidation}
            placeholder='이메일 주소를 입력해주세요.'
            required
          />
          <ErrorMessage>{emailError}</ErrorMessage>
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor='inpPassword'>비밀번호</Label>
          <Input
            id='inpPassword'
            type='password'
            onChange={pwValidation}
            placeholder='비밀번호를 설정해 주세요.'
            required
          />
          <ErrorMessage>{pwError}</ErrorMessage>
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor='inpPasswordCheck'>비밀번호</Label>
          <Input
            id='inpPasswordCheck'
            type='password'
            onChange={pwCheckValidation}
            placeholder='비밀번호를 설정해 주세요.'
            required
          />
          <ErrorMessage>{pwCheckError}</ErrorMessage>
        </InputWrapper>

        <Button className='large' disabled={isBtnActive} content='다음' />
      </form>
    </SignupWrapper>
  );
}

export default Signup;
