import React, { useEffect, useState } from 'react';
import { getFollowerList } from '../../../../Hooks/useApi';
import { FollowersWrapper } from './Followers.style';
import FollowersItem from '../../../../Components/FollowersItem/FollowersItem';

export default function Followers() {
  const [followerList, setFollowerList] = useState();

  useEffect(() => {
    getFollowerList().then(response => setFollowerList(response));
  }, []);

  return (
    <>
      <FollowersWrapper>
        <ul>
          {followerList && followerList.map((follower, index) => <FollowersItem follower={follower} key={index} />)}
        </ul>
      </FollowersWrapper>
    </>
  );
}
