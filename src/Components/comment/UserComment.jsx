import React from 'react';
import UserInfo from '../Common/UserInfo/UserInfo';
import { Text, Time, UserCommentInfo, UserInfoWrapper, CommentItem } from './CommentItem.style';
import Iconmore from '../../Assets/Icons/icon_more_vertical.png';

export function UserComment(content) {
  /* userImg, userNickname, postDate, nowDate, content */

  return (
    <CommentItem>
      <UserInfoWrapper>
        <UserCommentInfo>
          <UserInfo size='small' userInfoList={{ id: 'id123', username: 'usernamer123', image: '' }} />
          <Time dateTime='2022-12-21'>10분 전</Time>
        </UserCommentInfo>
        <button type='button'>
          <img src={Iconmore} alt='댓글 모달창 띄우는 버튼' />
        </button>
      </UserInfoWrapper>
      <Text>
        댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다
        댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다
        댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다
        댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다 댓글내용입니다
      </Text>
    </CommentItem>
  );
}
