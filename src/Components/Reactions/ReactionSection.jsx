import React from 'react';
import { ReactionWrapper } from './ReactionSection.style';
import LikeButton from './LikeButton';
import CommentCounter from './CommentCounter';

function ReactionSection() {
  return (
    <ReactionWrapper>
      <LikeButton />
      <CommentCounter />
    </ReactionWrapper>
  );
}

export default ReactionSection;
