import React, { useEffect, useState } from 'react';
import { FollowingWrapper } from './Following.style';
import { getFollowingList } from '../../../../Hooks/useApi';
import FollowItem from '../../../../Components/FollowItem/FollowItem';

export default function Following() {
  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    getFollowingList().then(response => setFollowingList(response));
  }, []);

  return (
    <>
      <FollowingWrapper>
        <ul>
          {followingList && followingList.map((following, index) => <FollowItem followInfo={following} key={index} />)}
        </ul>
      </FollowingWrapper>
    </>
  );
}
