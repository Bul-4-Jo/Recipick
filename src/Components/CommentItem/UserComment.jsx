import React from 'react';
import UserInfo from '../Common/UserInfo/UserInfo';
import { Text, Time, UserCommentInfo, UserInfoWrapper, CommentItem } from './UserComment.style';
import Iconmore from '../../Assets/Icons/icon_more_vertical.png';

export function UserComment({ accountname, username, image, content, uploadDate }) {
  /* userImg, userNickname, postDate, nowDate, content */
  const getFormatDate = date => {
    const year = date.getFullYear();
    const month = 1 + date.getMonth();
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일 `;
  };

  const upload = new Date(uploadDate);
  const date = getFormatDate(upload);

  return (
    <CommentItem>
      <UserInfoWrapper>
        <UserCommentInfo>
          <UserInfo size='small' userInfoList={{ accountname, username, image }} />
          <Time>{date}</Time>
        </UserCommentInfo>
        <button type='button'>
          <img src={Iconmore} alt='댓글 모달창 띄우는 버튼' />
        </button>
      </UserInfoWrapper>
      <Text>
        {content}
      </Text>
    </CommentItem >
  )
}
