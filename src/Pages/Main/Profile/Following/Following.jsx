import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FollowingWrapper } from './Following.style';
import { getFollowingList } from '../../../../API/api';
import FollowItem from '../../../../Components/FollowItem/FollowItem';
import BtnDarkMode from '../../../../Components/Common/BtnDarkMode/BtnDarkMode';
import { ThemeContext } from '../../../../Style/ThemeProvider';

export default function Following() {
  const { theme, themeHandler } = useContext(ThemeContext);

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
        <BtnDarkMode themeState={theme} themeHandler={themeHandler} />
      </FollowingWrapper>
    </>
  );
}
