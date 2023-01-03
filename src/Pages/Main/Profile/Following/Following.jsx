import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FollowingWrapper } from './Following.style';
import { getFollowingList } from '../../../../API/api';
import FollowItem from '../../../../Components/FollowItem/FollowItem';

export default function Following() {
  const [followingList, setFollowingList] = useState([]);
  const { accountName } = useParams();

  useEffect(() => {
    getFollowingList(accountName).then(response => setFollowingList(response));
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
