import React from 'react';
import { CommentSection, CommentList } from '../../Components/comment/comment.style';
import { MyCommentInput } from '../../Components/comment/MyCommentInput';

import { UserComment } from '../../Components/comment/UserComment';

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
          <UserComment />
          <UserComment />
        </CommentList>
      </CommentSection>
      <MyCommentInput />
    </>
  );
}
