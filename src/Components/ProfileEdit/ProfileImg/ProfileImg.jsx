import React from 'react';
import { ProfileImgWrapper } from './ProfileImg.style';
import ProfileThumb from '../../Common/ProfileThumb/ProfileThumb';
import BtnUpload from '../../Common/BtnUpload/BtnUpload';

export default function ProfileImg() {
  return (
    <>
      <ProfileImgWrapper>
        <ProfileThumb size='xlarge' />
        <BtnUpload />
      </ProfileImgWrapper>
    </>
  );
}
