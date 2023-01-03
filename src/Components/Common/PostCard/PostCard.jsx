import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserInfo from '../UserInfo/UserInfo';
import { PostCardWrapper, WriterInfo, GetText, GetImg, UploadDate } from './PostCard.style';


import iconMore from '../../../Assets/Icons/icon_more_vertical.png';
import Modal from '../Modal/Modal';
import ReactionSection from '../../Reactions/ReactionSection';

export default function PostCard({ accountname, username, image, postContent, postImg, uploadDate, postid, commentCount }) {
  const urlPostid = useParams();
  const pagePostId = urlPostid.postid
  const localID = localStorage.getItem('user ID');

  const navigate = useNavigate();
  const [ isModal, setIsModal ] = useState(false);

  const listObj =
    localID === accountname
      ? [
        {
          name: '삭제',
          func: () => console.log('삭제'),
        },
        { name: '수정', func: () => console.log('수정') },
      ]
      : [
        {
          name: '신고하기',
          func: () => console.log('신고하기'),
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
  const [ content, setContent ] = useState();

  useEffect(() => {
    if (postContent) {
      try {
        const contentObj = JSON.parse(postContent);

        setContent(contentObj.textValue);
      } catch (error) {
        if (error instanceof SyntaxError) {
          setContent(postContent);
        }
      }
    }
  }, [ postContent ]);

  const pageNavigate = (url, postid) => {
    if (!url) {
      navigate(`/post/${postid}`)
    }
    else { return };
  }


  return (
    <>
      <PostCardWrapper >
        <WriterInfo>
          <UserInfo size='medium' userInfoList={{ accountname, username, image }} text={accountname} />
          <button onClick={() => setIsModal(true)}>
            <img src={iconMore} alt='모달창 띄우는 버튼' />
          </button>
        </WriterInfo>
        
        <div onClick={() => pageNavigate(pagePostId, postId)}>
          <GetText>{content || null}</GetText>
          {postImg &&
            postImg.split(',').map(el => {
              return (
                <GetImg
                  key={crypto.randomUUID()}
                  src={el}
                  alt='사용자가 업로드한 이미지'
                />
              );
            })}
        </div>
        <ReactionSection postid={postid} commentCount={commentCount} />
        
        <UploadDate>{date}</UploadDate>
      </PostCardWrapper>
      {isModal && <Modal stateFunc={setIsModal} listObj={listObj} />}
    </>
  );
}
