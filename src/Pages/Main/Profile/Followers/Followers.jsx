import React from 'react';
import { FollowersWrapper } from './Followers.style';
import TabMenu from './../../../../Components/Common/TabMenu/TabMenu';
import FollowersItem from '../../../../Components/FollowersItem/FollowersItem';

export default function Followers() {
  return (
    <>
      <FollowersWrapper>
        <ul>
          <FollowersItem />
          <FollowersItem />
          <FollowersItem />
          <FollowersItem />
        </ul>
      </FollowersWrapper>
      <TabMenu />
    </>
  );
}
