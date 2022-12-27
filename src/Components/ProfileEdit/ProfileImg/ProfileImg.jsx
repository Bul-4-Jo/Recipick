import React from 'react';
import { ProfileImgWrapper } from './ProfileImg.style';
import ProfileThumb from '../../Common/ProfileThumb/ProfileThumb';
import BtnUpload from '../../Common/BtnUpload/BtnUpload';

export default function ProfileImg({ stateFunc, state }) {
  return (
    <>
      <ProfileImgWrapper>
        <ProfileThumb size='xlarge' src={`https://mandarin.api.weniv.co.kr/${state}`} />
        <BtnUpload stateFunc={stateFunc} response={state} />
      </ProfileImgWrapper>
    </>
  );
}
