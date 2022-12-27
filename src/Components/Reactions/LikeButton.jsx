import React, { useState } from 'react';
import Active from '../../Assets/Icons/svg/icon_heart_filled.svg';
import Inactive from '../../Assets/Icons/svg/icon_heart.svg';
import { ReactionItems } from './ReactionSection.style';

function LikeButton() {
  const [active, setActive] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  // const handleChangeActive = () => {
  //   setActive(previousHeart => {
  //     return !previousHeart;
  //   });
  // };

  const handleLike = async () => {
    setActive(previousHeart => {
      return !previousHeart;
    });
    setLikeCount(likeCount + 1);
    console.log('좋아요 +');
  };
  const handleUnlike = async () => {
    setActive(previousHeart => {
      return !previousHeart;
    });
    setLikeCount(likeCount - 1);
    console.log('좋아요 -');
  };

  return (
    <>
      <ReactionItems>
        {active ? (
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
        <span>{likeCount}</span>
      </ReactionItems>
    </>
  );
}

export default LikeButton;
