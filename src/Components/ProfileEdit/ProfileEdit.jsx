import React from 'react';
// import UploadHeader from './../../../../Components/Common/Header/UploadHeader';
import { ProfileEditWrapper } from './ProfileEdit.style';
import ProfileImg from './ProfileImg/ProfileImg';
import ProfileInput from './ProfileInput/ProfileInput';

export default function ProfileEdit() {
  return (
    <>
      <ProfileEditWrapper>
        <ProfileImg></ProfileImg>
        <ProfileInput></ProfileInput>
      </ProfileEditWrapper>
    </>
  );
}
