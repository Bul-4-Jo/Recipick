import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ProfileWrapper,
  ProfileTitle,
  InputWrapper,
  Label,
  Input,
  DescText,
  InpImg,
  ErrorMessage,
} from './ProfileSet.style';
import Button from '../../../Components/Common/Button/Button';
import ProfileThumb from '../../../Components/Common/ProfileThumb/ProfileThumb';
import BtnUpload from '../../../Components/Common/BtnUpload/BtnUpload';

const idAxios = axios.create({
  baseURL: 'https://mandarin.api.weniv.co.kr/user',
  headers: { 'Content-type': 'application/json' },
});

const registerAxios = axios.create({
  baseURL: 'https://mandarin.api.weniv.co.kr/',
  headers: { 'Content-type': 'application/json' },
});

export default function ProfileSet() {
  const navigate = useNavigate();
  const location = useLocation();
  const userEmail = location.state.email;
  const userPassword = location.state.password;

  console.log(userEmail, userPassword);

  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userIntro, setUserIntro] = useState('');

  const [userNameError, setUserNameError] = useState('');
  const [userIdError, setUserIdError] = useState('');
  const [isBtnActive, setIsBtnActive] = useState(true);

  const userNameValidation = e => {
    console.log(e.target.value);
    const value = e.target.value;

    setUserName(prev => value);

    if ((value.length < 2 && value !== '') || value.length > 10) {
      setUserNameError('2~10자 이내여야 합니다.');
    } else if (value === '') {
      setUserNameError('사용자 이름을 입력해주세요.');
    } else {
      setUserNameError('');
    }
  };

  const userIdValidation = e => {
    const value = e.target.value;
    const userIdRegex = /^[_A-Za-z0-9.]*$/;

    setUserId(prev => value);

    if (!userIdRegex.test(value)) {
      setUserIdError('영문, 숫자, 특수문자(,),(_)만 사용가능합니다.');
    } else if (value === '') {
      setUserIdError('계정 ID를 입력해주세요.');
    } else {
      setUserIdError('');
    }
  };

  const userIntroCheck = e => {
    const value = e.target.value;

    if (value === '') {
      setUserIntro('');
    } else {
      setUserIntro(prev => value);
    }
  };

  useEffect(() => {
    if (!userNameError && !userIdError) {
      if (!!userName && !!userId) {
        setIsBtnActive(prev => false);
      } else {
        setIsBtnActive(prev => true);
      }
    } else {
      setIsBtnActive(prev => true);
    }
  }, [userId, userName, userNameError, userIdError]);

  const submitProfile = async e => {
    e.preventDefault();
    console.log('submit');

    try {
      console.log(userId);
      const response = await idAxios.post('/accountnamevalid', { user: { accountname: userId } });

      if (response.data.message === '사용 가능한 계정ID 입니다.') {
        console.log(response.data.message);
        await submitRegister();
      } else if (response.data.message === '이미 가입된 계정ID 입니다.') {
        console.log(response.data.message);
      } else if (response.data.message === '잘못된 접근입니다.') {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const data = {
    user: {
      username: userName,
      email: userEmail,
      password: userPassword,
      accountname: userId,
      intro: userIntro,
      image: '',
    },
  };

  const submitRegister = async () => {
    try {
      await registerAxios
        .post('/user', data)
        .then(response => {
          console.log(response);
          console.log('회원가입 성공');
          navigate('/login');
        })
        .catch(response => console.log(response.data.message));
    } catch (error) {
      console.log(error.message);
    }
  };

  // aa....
  return (
    <ProfileWrapper>
      <ProfileTitle>프로필 설정</ProfileTitle>
      <DescText>나중에 언제든지 변경 할 수 있습니다.</DescText>
      <form onSubmit={submitProfile}>
        <InpImg>
          <ProfileThumb size={'xlarge'} />
          <BtnUpload />
        </InpImg>
        <InputWrapper>
          <Label htmlFor='userName'>사용자 이름</Label>
          <Input
            id='userName'
            onChange={userNameValidation}
            type='text'
            placeholder='2~10자 이내여야 합니다.'
            required
          />
          <ErrorMessage>{userNameError}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor='userId'>계정 ID</Label>
          <Input
            id='userId'
            type='text'
            onChange={userIdValidation}
            placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
            required
          />
          <ErrorMessage>{userIdError}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor='userDesc'>소개</Label>
          <Input
            id='userDesc'
            type='text'
            onChange={userIntroCheck}
            placeholder='자신과 판매할 상품에 대해 소개해 주세요!'
          />
        </InputWrapper>
        <Button className='large' content='시작하기' disabled={isBtnActive} />
      </form>
    </ProfileWrapper>
  );
}
