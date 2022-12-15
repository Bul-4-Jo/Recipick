import React from 'react';
import UploadHeader from '../../../../../Components/Common/Header/UploadHeader';
import { ProfileImgWrapper } from './ProfileImg.style';
import iconUplaodBtn from '../../../Assets/Icons/icon_uploadBtn.png';
import profileImg from '../../../../../Assets/Images/img_profile_basic.png';

export default function ProfileImg() {
  return (
    <>
      <UploadHeader />
      <ProfileImgWrapper>
        <img src={profileImg} alt='기본 프로필 이미지'></img>
        <button>
          <img src={iconUplaodBtn} alt='프로필 이미지 업로드 버튼'></img>
        </button>
      </ProfileImgWrapper>
    </>
  );
}
