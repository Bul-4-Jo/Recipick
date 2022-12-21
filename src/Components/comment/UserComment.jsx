import React from 'react';
import UserInfo from '../Common/UserInfo/UserInfo';
import { CommentItem } from './comment.style';
import { Text } from './commentItem.style';

export function UserComment(content) {
  /* userImg, userNickname, postDate, nowDate, content */

  return (
    <CommentItem>
      <UserInfo />
      <Text>
        댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다
        댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다
        댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다
        댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다
      </Text>
    </CommentItem>
  );
}
