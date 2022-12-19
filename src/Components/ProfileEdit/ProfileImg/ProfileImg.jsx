import React from 'react';
import { ProfileImgWrapper } from './ProfileImg.style';
import profileUploadBtn from '../../../Assets/Icons/icon_uploadBtn.png';
import ProfileThumb from '../../Common/ProfileThumb/ProfileThumb';

export default function ProfileImg() {
  return (
    <>
      <ProfileImgWrapper>
        <ProfileThumb />
        <button>
          <img src={profileUploadBtn} alt='프로필 이미지 업로드 버튼' />
        </button>
      </ProfileImgWrapper>
    </>
  );
}
