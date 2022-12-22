import React, { useEffect, useState } from 'react';
import { getFollowerList } from '../../../../Hooks/useApi';
import { FollowersWrapper } from './Followers.style';
import FollowItem from '../../../../Components/FollowItem/FollowItem';

export default function Followers() {
  const [followerList, setFollowerList] = useState();

  useEffect(() => {
    getFollowerList().then(response => setFollowerList(response));
  }, []);

  return (
    <>
      <FollowersWrapper>
        <ul>
          {followerList && followerList.map((follower, index) => <FollowItem followInfo={follower} key={index} />)}
        </ul>
      </FollowersWrapper>
    </>
  );
}
