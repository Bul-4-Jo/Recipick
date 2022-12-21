import React from 'react';
import { UserWrapper, ContentWrapper, Text, Title, Time, BtnMoreInfo } from './commentItem.style';
import ProfileThumb from '../../Components/Common/ProfileThumb/ProfileThumb';
import iconMore from '../../Assets/Icons/icon_more.png';

export default function UserInfo() {
  return (
    <UserWrapper>
      <ProfileThumb size='medium' />
      <ContentWrapper>
        <Title>애월읍 위니브 감귤농장</Title>
        <Time>11시간</Time>
      </ContentWrapper>
      <BtnMoreInfo>
        <img src={iconMore} alt='' />
      </BtnMoreInfo>
    </UserWrapper>
  );
}
