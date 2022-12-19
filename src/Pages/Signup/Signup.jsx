import React from 'react';
import Button from '../../Components/Common/Button/Button.style';
import { SignupWrapper, SignupTitle, Input, InputWrapper, Label } from './Signup.style';

function Signup() {
  return (
    <SignupWrapper>
      <SignupTitle>이메일로 회원가입</SignupTitle>
      <form>
        <InputWrapper>
          <Label htmlFor='inpEmail'>이메일</Label>
          <Input id='inpEmail' type='email' placeholder='이메일 주소를 입력해주세요.' required />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor='inpPassword'>비밀번호</Label>
          <Input id='inpPassword' type='password' placeholder='비밀번호를 설정해 주세요.' required />
        </InputWrapper>
        <Button className='large' content='다음' />
      </form>
    </SignupWrapper>
  );
}

export default Signup;
