import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeFeedWrapper, TextDesc } from './HomeFeed.style';
import Button from './../../../Components/Common/Button/Button';
import LogoCharacter from '../../../Assets/Images/logo_character.svg';
import { getFeedList } from '../../../API/api';
import PostCard from './../../../Components/Common/PostCard/PostCard';

export default function HomeFeed() {
  const [feedList, setFeedList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getFeedList().then(response => setFeedList(response));
  }, []);

  const onClickHandler = () => {
    navigate('/search');
  };

  return (
    <HomeFeedWrapper length={feedList.length}>
      {feedList.length ? (
        feedList.map(feed => {
          return (
            <PostCard
              accountname={feed.author.accountname}
              username={feed.author.username}
              image={feed.author.image}
              postContent={feed.content}
              postImg={feed.image}
            />
          );
          // <p>d</p>
        })
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
