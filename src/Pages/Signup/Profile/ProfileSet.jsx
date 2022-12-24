import React from 'react';
import { ProfileWrapper, ProfileTitle, InputWrapper, Label, Input, DescText, InpImg } from './ProfileSet.style';
import Button from '../../../Components/Common/Button/Button';
import ProfileImg from '../../../Components/ProfileEdit/ProfileImg/ProfileImg';

export default function ProfileSet() {
  return (
    <ProfileWrapper>
      <ProfileTitle>프로필 설정</ProfileTitle>
      <DescText>나중에 언제든지 변경 할 수 있습니다.</DescText>
      <form>
        <InpImg>
          <ProfileImg />
        </InpImg>
        <InputWrapper>
          <Label htmlFor='userName'>사용자 이름</Label>
          <Input id='userName' type='text' placeholder='2~10자 이내여야 합니다.' required />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor='userId'>계정 ID</Label>
          <Input id='userId' type='text' placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.' required />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor='userDesc'>소개</Label>
          <Input id='userDesc' type='text' placeholder='자신과 판매할 상품에 대해 소개해 주세요!' required />
        </InputWrapper>
        <Button className='large' content='시작하기' />
      </form>
    </ProfileWrapper>
  );
}
