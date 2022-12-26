import React from 'react';
import { ProfileImgWrapper } from './ProfileImg.style';
import ProfileThumb from '../../Common/ProfileThumb/ProfileThumb';
import BtnUpload from '../../Common/BtnUpload/BtnUpload';

export default function ProfileImg({ state, stateFunc }) {
  return (
    <>
      <ProfileImgWrapper>
        <ProfileThumb size='xlarge' src={state} />
        <BtnUpload stateFunc={stateFunc} />
      </ProfileImgWrapper>
    </>
  );
}
