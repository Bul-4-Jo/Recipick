import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserInfo from '../UserInfo/UserInfo';

import {
  PostCardWrapper,
  WriterInfo,
  GetText,
  GetImg,
  UploadDate,
  PostTagWrapper,
  PostTagItem,
  PostContentWrapper,
} from './PostCard.style';
import { reportPost } from '../../../API/api';
import iconMore from '../../../Assets/Icons/icon_more_vertical.png';
import Modal from '../Modal/Modal';
import ReactionSection from '../../Reactions/ReactionSection';
import Alert from './../../Common/Alert/Alert';
import Carousel from '../../Carousel/Carousel';

export default function PostCard({
  accountname,
  username,
  image,
  postContent,
  postImg,
  uploadDate,
  postid,
  commentCount,
  deletePostHandler,
  children,
}) {
  const urlPostid = useParams();
  const pagePostId = urlPostid.postid;
  const localID = localStorage.getItem('user ID');

  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const [isReportAlert, setIsReportAlert] = useState(false);

  const listObj =
    localID === accountname
      ? [
          {
            name: '삭제',
            func: () => setIsAlert(true),
          },
          {
            name: '수정',
            func: () =>
              navigate(`/post/${postid}/edit`, { state: { id: postid, content: postContent, image: postImg } }),
          },
        ]
      : [
          {
            name: '신고하기',
            func: () => setIsReportAlert(true),
          },
        ];
  const getFormatDate = date => {
    const year = date.getFullYear();
    const month = 1 + date.getMonth();
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일 `;
  };

  const upload = new Date(uploadDate);
  const date = getFormatDate(upload);
  const [content, setContent] = useState();
  const [tagList, setTagList] = useState();

  useEffect(() => {
    if (postContent) {
      try {
        const contentObj = JSON.parse(postContent);

        setContent(contentObj.textValue);
        setTagList(contentObj.tagList);
      } catch (error) {
        if (error instanceof SyntaxError) {
          setContent(postContent);
        }
      }
    }
  }, [postContent]);

  const pageNavigate = (url, postId) => {
    if (!url) {
      navigate(`/post/${postId}`);
    }
  };

  return (
    <>
      <PostCardWrapper>
        <WriterInfo>
          <UserInfo size='medium' userInfoList={{ accountname, username, image }} text={`@ ${accountname}`} />
          <button onClick={() => setIsModal(true)}>
            <img src={iconMore} alt='모달창 띄우는 버튼' />
          </button>
        </WriterInfo>

        <PostContentWrapper onClick={() => pageNavigate(pagePostId, postid)}>
          {tagList && (
            <PostTagWrapper>
              {tagList.map(tag => (
                <PostTagItem key={crypto.randomUUID()}>{tag}</PostTagItem>
              ))}
            </PostTagWrapper>
          )}
          <GetText>{content || null}</GetText>
          {postImg && postImg.includes(',') ? (
            <Carousel>
              {postImg.split(',').map(el => {
                return <GetImg key={crypto.randomUUID()} src={el} alt='사용자가 업로드한 이미지' />;
              })}
            </Carousel>
          ) : (
            <GetImg key={crypto.randomUUID()} src={postImg} alt='사용자가 업로드한 이미지' />
          )}
        </PostContentWrapper>
        <ReactionSection postid={postid} commentCount={commentCount} />

        <UploadDate>{date}</UploadDate>
        {children}
      </PostCardWrapper>
      {isModal && <Modal stateFunc={setIsModal} listObj={listObj} />}
      {isAlert && (
        <Alert
          alertMSG='게시글을 삭제할까요?'
          rightMSG='삭제'
          rightFunc={() => deletePostHandler(postid)}
          stateFunc={setIsAlert}
        />
      )}
      {isReportAlert && (
        <Alert
          alertMSG='신고 하시겠습니까??'
          rightMSG='신고'
          rightFunc={() => reportPost(postid).then(res => console.log(res))}
          stateFunc={setIsReportAlert}
        />
      )}
    </>
  );
}
