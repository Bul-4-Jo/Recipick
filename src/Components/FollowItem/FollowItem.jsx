import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FollowItemWrapper, ContentWrapper, Text, Title } from './FollowItem.style';
import ProfileThumb from '../Common/ProfileThumb/ProfileThumb';
import Button from '../Common/Button/Button';
import { follow, unFollow } from '../../Hooks/useApi';

export default function FollowersItem({ followInfo }) {
  const { accountname, username, isfollow, image, intro } = followInfo;
  const [isFollowing, setIsFollowing] = useState(isfollow);

  const onClickHandler = () => {
    if (isFollowing) {
      unFollow(accountname).then(response => setIsFollowing(response));
    } else {
      follow(accountname).then(response => setIsFollowing(response));
    }
  };

  return (
    <FollowItemWrapper>
      <Link to={`/profile/${accountname}`}>
        <ProfileThumb size='large' src={image} />
        <ContentWrapper>
          <Title>{username}</Title>
          <Text>{intro}</Text>
        </ContentWrapper>
      </Link>
      {isFollowing ? (
        <Button className='small' content='취소' disabled={false} active onClick={onClickHandler} />
      ) : (
        <Button className='small' content='팔로우' disabled={false} onClick={onClickHandler} />
      )}
    </FollowItemWrapper>
  );
}
