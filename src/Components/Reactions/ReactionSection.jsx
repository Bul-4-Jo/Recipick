import React, { useState, useEffect } from 'react';
import { ReactionWrapper } from './ReactionSection.style';
import LikeButton from './LikeButton';
import CommentCounter from './CommentCounter';
import { getPostDetail } from '../../API/api';

function ReactionSection({ postid }) {
  const [ heartState, setHeartState ] = useState(false)
  const [ heartCount, setHeartCount ] = useState(0)

  useEffect(() => {
    getPostDetail(postid).then(res => {
      console.log(res.post)
      setHeartState(prev => res.post.hearted)
      setHeartCount(prev => res.post.heartCount)
    })
  }, [ heartState, heartCount ])

function ReactionSection({ commentCount }) {
  return (
    <ReactionWrapper>
      <LikeButton heartCount={heartCount} postid={postid} heartFunc={setHeartState} heartState={heartState} />
      <CommentCounter commentCount={commentCount} />
    </ReactionWrapper>
  );

}

export default ReactionSection;
