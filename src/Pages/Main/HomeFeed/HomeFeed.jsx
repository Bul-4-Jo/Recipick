import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeFeedWrapper, TextDesc } from './HomeFeed.style';
import Button from './../../../Components/Common/Button/Button';
import LogoCharacter from '../../../Assets/Images/logo_character.svg';

export default function HomeFeed() {
  const [feedList, setFeedList] = useState([]);
  const navigate = useNavigate();

  const baseURL = process.env.REACT_APP_URL;
  const token = process.env.REACT_APP_TOKEN_NO_FOLLOWER;

  useEffect(() => {
    const instance = axios.create({
      baseURL,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });

    const getFeedData = async () => {
      try {
        const response = await instance.get('/post/feed');

        setFeedList(response.data.posts);
      } catch (error) {
        console.error(error.message);
      }
    };

    getFeedData();
  }, []);

  const onClickHandler = () => {
    navigate('/search');
  };

  return (
    <HomeFeedWrapper>
      {feedList.length ? (
        <p>feedList</p>
      ) : (
        <>
          <img src={LogoCharacter} alt='' />
          <TextDesc>유저를 검색해 팔로우 해보세요!</TextDesc>
          <Button className='mediumSmall' content='검색하기' disabled={false} onClick={onClickHandler} />
        </>
      )}
    </HomeFeedWrapper>
  );
}
