import React from 'react';
import { ReactionWrapper } from './ReactionSection.style';
import LikeButton from './LikeButton';
import CommentCounter from './CommentCounter';

function ReactionSection({ commentCount }) {
  return (
    <ReactionWrapper>
      <LikeButton />
      <CommentCounter commentCount={commentCount} />
    </ReactionWrapper>
  );
}

export default ReactionSection;
