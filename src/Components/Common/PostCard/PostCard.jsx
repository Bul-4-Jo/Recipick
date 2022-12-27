import React from 'react';
import { useOutletContext } from 'react-router-dom';
import UserInfo from '../UserInfo/UserInfo';
import { PostCardWrapper, WriterInfo, GetText, GetImg, UploadDate } from './PostCard.style';
import iconMore from '../../../Assets/Icons/icon_more_vertical.png';
import Modal from '../Modal/Modal';
import ReactionSection from '../../Reactions/ReactionSection';

export default function PostCard() {
  const { setIsModal, isModal } = useOutletContext();
  const listObj = [
    {
      name: '삭제',
      func: () => console.log('삭제'),
    },
    { name: '수정', func: () => console.log('수정') },
  ];
  const onClickHandler = () => {
    setIsModal(prev => !prev);
  };

  const uploadDate = new Date();
  const year = uploadDate.getFullYear();
  const month = uploadDate.getMonth() + 1;
  const day = uploadDate.getDate();

  return (
    <>
      <PostCardWrapper>
        <WriterInfo>
          <UserInfo size='medium' userInfoList={{ id: 12, username: 'test', image: '' }} text='@계정닉네임' />
          <button onClick={onClickHandler}>
            <img src={iconMore} alt='모달창 띄우는 버튼' />
          </button>
        </WriterInfo>
        <GetText>
          사용자가 쓴 글을 불러올 장소입니다. 사용자가 쓴 글을 불러올 장소입니다. 사용자가 쓴 글을 불러올 장소입니다.
          사용자가 쓴 글을 불러올 장소입니다. 사용자가 쓴 글을 불러올 장소입니다. 사용자가 쓴 글을 불러올 장소입니다.
          사용자가 쓴 글을 불러올 장소입니다.
        </GetText>
        <GetImg src='' alt='사용자가 업로드한 이미지' />
        <ReactionSection />
        <UploadDate>
          {year}년 {month}월 {day}일
        </UploadDate>
      </PostCardWrapper>
      {isModal && <Modal listObj={listObj} />};
    </>
  );
}
