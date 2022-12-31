import React from 'react';
import { CommentSection, CommentList } from './Comment.style';
import { MyCommentInput } from '../CommentItem/MyCommentInput';

import { UserComment } from '../CommentItem/UserComment';

export default function Comment() {
  return (
    <>
      {/* <UserContent />
      <OriginalPost>
        <UserInfo />
        {/* 게시물텍스트, 이미지, 좋아요, 댓글, 날짜*
      </OriginalPost> */}
      <CommentSection>
        <CommentList>
          <UserComment />
        </CommentList>
      </CommentSection>
      <MyCommentInput />
    </>
  );
}
