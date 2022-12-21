import React from 'react';
import UserInfo from './UserInfo';
import { CommentItem } from './comment.style';
import { Text, BtnMoreInfo } from './commentItem.style';
import iconMore from '../../Assets/Icons/icon_more.png';

export function UserComment(content) {
  /* userImg, userNickname, postDate, nowDate, content */

  return (
    <CommentItem>
      <UserInfo />
      <Text>댓글내용입니다</Text>
    </CommentItem>
  );
}
