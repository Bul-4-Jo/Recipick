import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeFeedWrapper, TextDesc } from './HomeFeed.style';
import Button from './../../../Components/Common/Button/Button';
import LogoCharacter from '../../../Assets/Images/logo_character.svg';
import { getFeedList } from '../../../API/api';
import PostCard from './../../../Components/Common/PostCard/PostCard';

export default function HomeFeed() {
  const [feedList, setFeedList] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const skip = useRef(0);
  const observerRef = useRef();
  const observerTargetRef = useRef();
  const homeFeedRef = useRef();

  const onClickHandler = () => {
    navigate('/search');
  };

  const observerHandler = ([entries]) => {
    if (entries.isIntersecting) {
      getFeed();
    }
  };

  const getFeed = useCallback(async () => {
    const feeds = await getFeedList(skip.current);

    if (feeds.length < 5) {
      observerRef.current.unobserve(observerTargetRef.current);
    }

    setFeedList(prev => [...prev, ...feeds]);
    setIsLoading(false);
    skip.current += 5;
  }, [skip.current]);

  useEffect(() => {
    if (observerTargetRef.current) {
      observerRef.current = new IntersectionObserver(observerHandler, {
        root: homeFeedRef.current,
        rootMargin: '10px 0px 10px',
      });
      observerRef.current.observe(observerTargetRef.current);
    }

    return () => observerRef.current && observerRef.current.disconnect();
  }, [isLoading]);

  return (
    <HomeFeedWrapper length={feedList.length} ref={homeFeedRef}>
      {!isLoading && feedList.length ? (
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
                key={feed.id}
                commentCount={feed.commentCount}
                postid={feed.id}
              />
            );
          })}
        </>
      ) : (
        <>
          <img src={LogoCharacter} alt='' />
          <TextDesc>유저를 검색해 팔로우 해보세요!</TextDesc>
          <Button className='mediumSmall' content='검색하기' disabled={false} onClick={onClickHandler} />
        </>
      )}
      <div ref={observerTargetRef} />
    </HomeFeedWrapper>
  );
}
