import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FollowersWrapper } from './Followers.style';
import TabMenu from './../../../../Components/Common/TabMenu/TabMenu';
import FollowersItem from '../../../../Components/FollowersItem/FollowersItem';

export default function Followers() {
  const [followerList, setFollowerList] = useState([]);

  const baseURL = process.env.REACT_APP_URL;
  const token = process.env.REACT_APP_TOKEN;
  const accountName = process.env.REACT_APP_ACCOUNT_NAME;

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
      <TabMenu />
    </>
  );
}
