import React from 'react';
import { useOutletContext } from 'react-router-dom';
import UserInfo from '../UserInfo/UserInfo';
import { PostCardWrapper, WriterInfo, GetText, GetImg } from './PostCard.style';
import iconMore from '../../../Assets/Icons/icon_more_vertical.png';
import Modal from '../Modal/Modal';

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
      </PostCardWrapper>
      {isModal && <Modal listObj={listObj} />};
    </>
  );
}
