import React from 'react';
import { profileImgWrapper } from './ProfileImg.style';
import profileUplaodBtn from '../../../../../Assets/Icons/icon_uploadBtn.png';
import profileImg from '../../../../../Assets/Images/img_profile_basic.png';

export default function ProfileImg() {
  return (
    <>
      <profileImgWrapper>
        <img src={profileImg} alt='기본 프로필 이미지'></img>
        <button>
          <img src={profileUplaodBtn} alt='프로필 이미지 업로드 버튼'></img>
        </button>
      </profileImgWrapper>
    </>
  );
}
