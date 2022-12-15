import React from 'react';
import { ProfileInputWrapper } from './ProfileInput.style';

export default function ProfileInput() {
  return (
    <>
      <ProfileInputWrapper>
        <form>
          <label for='userName'>사용자 이름</label>
          <input type='text' id='userName' placeholder='2~10자 이내여야 합니다.' />
          <label for='userId'>계정 ID</label>
          <input type='text' id='userId' placeholder='영문,숫자,특수문자(.),(_)만 사용가능합니다.' />
          <label for='userIntroduce'>소개</label>
          <input type='text' id='userIntroduce' placeholder='자신과 판매할 상품에 대해 소개해 주세요!' />
        </form>
      </ProfileInputWrapper>
    </>
  );
}
