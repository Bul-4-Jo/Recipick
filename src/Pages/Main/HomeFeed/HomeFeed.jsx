import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeFeedWrapper, TextDesc } from './HomeFeed.style';
import Button from './../../../Components/Common/Button/Button';
import LogoCharacter from '../../../Assets/Images/logo_character.svg';
import { getFeedList } from '../../../API/api';
import PostCard from './../../../Components/Common/PostCard/PostCard';

export default function HomeFeed() {
  const [feedList, setFeedList] = useState([]);
  const navigate = useNavigate();
  const userAccountName = localStorage.getItem('user ID');
  const [target, setTarget] = useState(null);
  const endRef = useRef(false);
  const isLoadedRef = useRef(true);
  const [skip, setSkip] = useState(0);

  const onClickHandler = () => {
    navigate('/search');
  };

  const observerHandler = ([entries]) => {
    if (entries.isIntersecting && isLoadedRef.current && !endRef.current) {
      isLoadedRef.current = false;
      setSkip(prev => prev + 10);
    }
  };

  const getFeed = async () => {
    console.log('getFeed');
    const response = await getFeedList(skip);

    if (response.length === 0) {
      endRef.current = true;
    }
    setFeedList(prev => [...prev, ...response]);
  };

  useEffect(() => {
    let observer;

    getFeedList(skip).then(response => setFeedList(response));

    if (target) {
      observer = new IntersectionObserver(observerHandler, { threshold: 0.3, rootMargin: '0px' });
      observer.observe(target);
    }

    return () => observer && observer.disconnect();
  }, [target]);

  useEffect(() => {
    if (!skip) return;
    getFeed();
  }, [skip]);

  useEffect(() => {
    isLoadedRef.current = true;
  }, [feedList]);

  return (
    <HomeFeedWrapper length={feedList.length}>
      {feedList.length ? (
        <>
          {feedList.map(feed => {
            return (
              <PostCard
                accountname={feed.author.accountname}
                username={feed.author.username}
                image={feed.author.image}
                postContent={feed.content}
                postImg={feed.image}
                uploadDate={feed.updatedAt}
                key={crypto.randomUUID()}
                commentCount={feed.commentCount}
                postid={feed.id}
              />
            );
          })}
          <div ref={setTarget}></div>
        </>
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
