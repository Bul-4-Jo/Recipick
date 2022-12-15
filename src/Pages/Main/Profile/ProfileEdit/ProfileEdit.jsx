import React from 'react';
// import UploadHeader from './../../../../Components/Common/Header/UploadHeader';
import { ProfileEditWrapper } from './ProfileEdit.style';
import ProfileImg from './../../../Main/Profile/ProfileEdit/ProfileImg/ProfileImg';
import ProfileInput from './../../../Main/Profile/ProfileEdit/ProfileInput/ProfileInput';

export default function ProfileEdit() {
  return (
    <>
      <ProfileEditWrapper>
        <ProfileImg></ProfileImg>
        <ProfileInput></ProfileInput>
      </ProfileEditWrapper>
      ;
    </>
  );
}
