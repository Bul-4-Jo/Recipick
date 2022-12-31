import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CommentIcon from '../../Assets/Icons/svg/icon_chat.svg';
import { ReactionItems } from './ReactionSection.style';

function CommentCounter(props) {
  const [commentCount, setCommentCount] = useState(0);
  // const { pathname } = useLocation();

  return (
    <ReactionItems>
      <Link to={`/postid/${response.id}`}>
        <img className='CommentCounter' src={CommentIcon} alt='CommentCountIcon' onClick={() => {}} />
        <span>{response.commentCount}</span>
      </Link>
    </ReactionItems>
  );
}

export default CommentCounter;
