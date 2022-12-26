import React, { useState } from 'react';
import CommentIcon from '../../Assets/Icons/svg/icon_chat.svg';
import { ReactionItems } from './ReactionSection.style';

function CommentCounter() {
  const [ commentCount, setCommentCount ] = useState(0);

  return (
    <ReactionItems>
      <img className='CommentCounter' src={CommentIcon} alt='CommentCountIcon' onClick={() => { }} />
      <span>{commentCount}</span>
    </ReactionItems>
  );
}

export default CommentCounter;
