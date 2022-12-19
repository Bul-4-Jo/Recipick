import React from 'react';
import { UserWrapper, ContentWrapper, Text, Title } from './SearchUserItem.style';
import ProfileThumb from '../../../Components/Common/ProfileThumb/ProfileThumb';

export default function SearchUserItem() {
  return (
    <UserWrapper>
      <ProfileThumb size='large' />
      <ContentWrapper>
        <Title>애월읍 위니브 감귤농장</Title>
        <Text>@weniv_Mandarin</Text>
      </ContentWrapper>
    </UserWrapper>
  );
}
