import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFollowerList } from '../../../../API/api';
import { FollowersWrapper } from './Followers.style';
import FollowItem from '../../../../Components/FollowItem/FollowItem';

export default function Followers() {
  const [followerList, setFollowerList] = useState();
  const { accountName } = useParams();

  useEffect(() => {
    getFollowerList(accountName).then(response => setFollowerList(response));
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
