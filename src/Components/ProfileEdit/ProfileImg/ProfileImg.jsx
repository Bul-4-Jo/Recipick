import React from 'react';
import { ProfileImgWrapper } from './ProfileImg.style';
import ProfileThumb from '../../Common/ProfileThumb/ProfileThumb';
import BtnUpload from '../../Common/BtnUpload/BtnUpload';

export default function ProfileImg({ stateFunc, response, firstImg }) {
  return (
    <>
      <ProfileImgWrapper>
        <ProfileThumb size='xlarge' src={firstImg || response} />
        <BtnUpload stateFunc={stateFunc} response={response} />
      </ProfileImgWrapper>
    </>
  );
}
