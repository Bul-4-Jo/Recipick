import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getFollowerList } from '../../../../API/api';
import { FollowersWrapper } from './Followers.style';
import FollowItem from '../../../../Components/FollowItem/FollowItem';
import BtnDarkMode from '../../../../Components/Common/BtnDarkMode/BtnDarkMode';
import { ThemeContext } from '../../../../Style/ThemeProvider';

export default function Followers() {
  const { theme, themeHandler } = useContext(ThemeContext);

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
      <BtnDarkMode themeState={theme} themeHandler={themeHandler} />
    </>
  );
}
