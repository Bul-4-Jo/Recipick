import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FollowersWrapper } from './Followers.style';
import FollowersItem from '../../../../Components/FollowersItem/FollowersItem';

export default function Followers() {
  const [followerList, setFollowerList] = useState([]);

  const baseURL = 'https://mandarin.api.weniv.co.kr/';
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODAxZTRkMTdhZTY2NjU4MWJlNzg2OCIsImV4cCI6MTY3NjYxMTg0NCwiaWF0IjoxNjcxNDI3ODQ0fQ.cosYUGsMg0OFe3OdOPu8W-Q27jBD0Z6aWyqJcfpvHCU';
  const accountName = 'gamgyultest';

  useEffect(() => {
    const instance = axios.create({
      baseURL,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });

    const getFollowerList = async () => {
      try {
        const response = await instance.get(`/profile/${accountName}/follower?limit=50`);

        setFollowerList(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    getFollowerList();
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
