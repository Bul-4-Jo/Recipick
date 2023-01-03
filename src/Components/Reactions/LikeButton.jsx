import React, { useState } from 'react';
import Active from '../../Assets/Icons/svg/icon_heart_filled.svg';
import Inactive from '../../Assets/Icons/svg/icon_heart.svg';
import { ReactionItems } from './ReactionSection.style';
import { like, unLike } from '../../API/api';

function LikeButton({ heartCount, postid, heartState, heartFunc }) {
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = async () => {
    await like(postid).then(res => console.log(res));
    heartFunc(prev => !prev);
  };
  const handleUnlike = async () => {
    await unLike(postid).then(res => console.log(res));
    heartFunc(prev => !prev);
  };

  return (
    <>
      <ReactionItems>
        {heartState ? (
          <img
            className='active'
            src={Active}
            alt='heart filled'
            onClick={() => {
              handleUnlike();
            }}
          />
        ) : (
          <img
            className='inactive'
            src={Inactive}
            alt='heart not filled'
            onClick={() => {
              handleLike();
            }}
          />
        )}
        <span>{heartCount}</span>
      </ReactionItems>
    </>
  );
}

export default LikeButton;
