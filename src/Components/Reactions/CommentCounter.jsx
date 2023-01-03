import React, { useEffect, useState } from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import CommentIcon from '../../Assets/Icons/svg/icon_chat.svg';
import { ReactionItems } from './ReactionSection.style';

function CommentCounter({ commentCount }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(commentCount);
  }, []);
  return (
    <ReactionItems>
      <div>
        <img className='CommentCounter' src={CommentIcon} alt='CommentCountIcon' />
        <span>{count}</span>
      </div>
    </ReactionItems>
  );
}

export default CommentCounter;
