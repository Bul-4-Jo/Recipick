import React, { useState } from 'react';
import UserInfo from '../Common/UserInfo/UserInfo';
import Modal from '../Common/Modal/Modal';
import { Text, Time, UserCommentInfo, UserInfoWrapper, CommentItem } from './UserComment.style';
import Iconmore from '../../Assets/Icons/icon_more_vertical.png';
import { deleteComment } from '../../API/api';

export function UserComment({ accountname, username, image, content, uploadDate, postid, commentId, setCommentList }) {
  /* userImg, userNickname, postDate, nowDate, content */
  const [isModal, setIsModal] = useState(false);
  const [res, setRes] = useState([]);
  const localID = localStorage.getItem('user ID');

  const listObj =
    localID === accountname
      ? [
          {
            name: '댓글 삭제',
            func: () => {
              deleteComment(postid, commentId);
              setCommentList(prev => prev.filter(comment => comment.id !== commentId));
            },
          },
        ]
      : [];

  const getFormatDate = date => {
    const year = date.getFullYear();
    const month = 1 + date.getMonth();
    const day = date.getDate();

    console.log(year, month, day);

    return `${year}년 ${month}월 ${day}일 `;
  };

  const upload = new Date(uploadDate);
  const date = getFormatDate(upload);

  const detailDate = a => {
    const milliSeconds = new Date() - a;
    const seconds = milliSeconds / 1000;

    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;

    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;

    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;

    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;

    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;

    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;

    return `${Math.floor(years)}년 전`;
  };

  // api에 있는 detailPost.createdAt를 바꿔주는 것
  const nowDate = detailDate(new Date(uploadDate));

  return (
    <>
      <CommentItem>
        <UserInfoWrapper>
          <UserCommentInfo>
            <UserInfo size='small' userInfoList={{ accountname, username, image }} />
            <Time className='detail_time'> {nowDate}</Time>
          </UserCommentInfo>
          <button type='button' onClick={() => setIsModal(true)}>
            <img src={Iconmore} alt='댓글 모달창 띄우는 버튼' />
          </button>
        </UserInfoWrapper>
        <Text>{content}</Text>
      </CommentItem>
      {!!listObj.length && isModal && <Modal stateFunc={setIsModal} listObj={listObj} />}
    </>
  );
}
