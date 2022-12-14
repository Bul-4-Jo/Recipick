import React from 'react';
import { FollowersItemWrapper, ContentWrapper, Text, Title } from './FollowersItem.style';
import ProfileThumb from '../Common/ProfileThumb/ProfileThumb';
import Button from '../Common/Button/Button.style';

export default function FollowersItem() {
  return (
    <FollowersItemWrapper>
      <ProfileThumb size='large' />
      <ContentWrapper>
        <Title>애월읍 한라봉 최고 맛집</Title>
        <Text>
          정성을 다해 농사짓는 한라봉정성을 다해 농사짓는 한라봉정성을 다해 농사짓는 한라봉정성을 다해 농사짓는
          한라봉정성을 다해 농사짓는 한라봉
        </Text>
      </ContentWrapper>
      <Button className='small' content='팔로우' />
    </FollowersItemWrapper>
  );
}
