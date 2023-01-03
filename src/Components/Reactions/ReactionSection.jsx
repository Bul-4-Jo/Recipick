import React, { useState, useEffect } from 'react';
import { ReactionWrapper } from './ReactionSection.style';
import LikeButton from './LikeButton';
import CommentCounter from './CommentCounter';
import { getPostDetail } from '../../API/api';

function ReactionSection({ postid, commentCount }) {
  const [heartState, setHeartState] = useState(false);
  const [heartCount, setHeartCount] = useState(0);

  useEffect(() => {
    if (!postid) return;
    getPostDetail(postid).then(res => {
      setHeartState(prev => res.post.hearted);
      setHeartCount(prev => res.post.heartCount);
    });
  }, [heartState, heartCount]);

  return (
    <ReactionWrapper>
      <LikeButton heartCount={heartCount} postid={postid} heartFunc={setHeartState} heartState={heartState} />
      <CommentCounter commentCount={commentCount} />
    </ReactionWrapper>
  );
}

export default ReactionSection;
