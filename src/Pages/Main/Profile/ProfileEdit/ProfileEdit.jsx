import React from 'react';
import ProfileImg from '../../../../Components/ProfileEdit/ProfileImg/ProfileImg';
import ProfileInput from '../../../../Components/ProfileEdit/ProfileInput/ProfileInput';
import { ProfileEditWrapper } from './ProfileEdit.style';

export default function ProfileEdit() {
  return (
    <ProfileEditWrapper>
      <ProfileImg />
      <ProfileInput />
    </ProfileEditWrapper>
  );
}
