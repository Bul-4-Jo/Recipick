import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUploadFile } from './../../../../Hooks/useUploadFile';
import ProfileImg from '../../../../Components/ProfileEdit/ProfileImg/ProfileImg';
import { ProfileWrapper, InputWrapper, Label, Input, InpImg, ErrorMessage } from './ProfileEdit.style';
import { getProfile, pushProfile } from '../../../../API/api';
import ProfileBtnPortal from './../../../../Components/ProfileEdit/ProfileBtn/ProfileBtn';

export default function ProfileEdit() {
  const { uploadSingleFile, response } = useUploadFile();
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userIntro, setUserIntro] = useState('');
  const [profileImg, setProfileImg] = useState('');
  const [firstProfileImg, setFirstProfileImg] = useState('');

  const [userNameError, setUserNameError] = useState('');
  const [userIdError, setUserIdError] = useState('');

  const [isBtnActive, setIsBtnActive] = useState(true);

  const localID = localStorage.getItem('user ID');

  useEffect(() => {
    getProfile(localID).then(res => {
      const { accountname, username, intro, image } = res.profile;

      setUserId(prev => accountname);
      setUserName(prev => username);
      setUserIntro(prev => intro);
      setProfileImg(prev => [image]);
      setFirstProfileImg(prev => image);
    });
  }, []);

  useEffect(() => {
    setProfileImg(response);
    setFirstProfileImg('');
  }, [response]);

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

  // 사용자이름 유효성 검사
  const userNameValidation = e => {
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

  // 계정 ID 유효성 검사
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

  // 소개 유효성 검사
  const userIntroCheck = e => {
    const value = e.target.value;

    if (value === '') {
      setUserIntro('');
    } else {
      setUserIntro(prev => value);
    }
  };

  const submitProfile = async e => {
    e.preventDefault();

    try {
      const user = {
        username: userName,
        accountname: userId,
        intro: userIntro,

        image: firstProfileImg || `https://mandarin.api.weniv.co.kr/${profileImg[0]}` || '',
      };
      const res = await pushProfile(user);

      localStorage.setItem('user ID', res.user.accountname);
      navigate(`/profile/${res.user.accountname}`);

      if (res.message === '사용 가능한 계정ID 입니다.') {
        console.log(res.message);
      } else if (res.message === '이미 가입된 계정ID 입니다.') {
        console.log(res.message);
      } else if (res.message === '잘못된 접근입니다.') {
        console.log(res.message);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <ProfileWrapper>
      <form onSubmit={submitProfile} id='profileContent'>
        <InpImg>
          <ProfileImg
            userName={userName}
            stateFunc={uploadSingleFile}
            response={profileImg[0] ? [`https://mandarin.api.weniv.co.kr/${response[0]}`] : []}
            firstImg={firstProfileImg}
          />
        </InpImg>
        <InputWrapper>
          <Label htmlFor='userName'>사용자 이름</Label>
          <Input
            id='userName'
            onChange={userNameValidation}
            type='text'
            placeholder='2~10자 이내여야 합니다.'
            value={userName}
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
            value={userId}
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
            value={userIntro}
          />
        </InputWrapper>
        <ProfileBtnPortal btnState={isBtnActive} />
      </form>
    </ProfileWrapper>
  );
}
