import React from 'react';
import { ProfileImgWrapper } from './ProfileImg.style';
import ProfileThumb from '../../Common/ProfileThumb/ProfileThumb';
import BtnUpload from '../../Common/BtnUpload/BtnUpload';

export default function ProfileImg({ stateFunc, state, src }) {
  return (
    <>
      <ProfileImgWrapper>
        <ProfileThumb size='xlarge' src={src} />
        <BtnUpload stateFunc={stateFunc} response={state} />
      </ProfileImgWrapper>
    </>
  );
}
