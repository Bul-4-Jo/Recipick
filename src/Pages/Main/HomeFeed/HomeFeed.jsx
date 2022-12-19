import React, { useState } from 'react';
import { HomeFeedWrapper, TextDesc } from './HomeFeed.style';
import Button from './../../../Components/Common/Button/Button.style';
import LogoCharacter from '../../../Assets/Images/logo_character.svg';

export default function HomeFeed() {
  const [feedList, setFeedList] = useState([]);

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
