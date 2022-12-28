import React, { useEffect, useState } from 'react';
import UserInfo from '../UserInfo/UserInfo';
import { PostCardWrapper, WriterInfo, GetText, GetImg, UploadDate } from './PostCard.style';
import iconMore from '../../../Assets/Icons/icon_more_vertical.png';
import Modal from '../Modal/Modal';
import ReactionSection from '../../Reactions/ReactionSection';

export default function PostCard({ accountname, username, image, postContent, postImg }) {
  const [isModal, setIsModal] = useState(false);
  const listObj = [
    {
      name: '삭제',
      func: () => console.log('삭제'),
    },
    { name: '수정', func: () => console.log('수정') },
  ];
  const [content, setContent] = useState();

  useEffect(() => {
    if (postContent) {
      const contentObj = JSON.parse(postContent);

      setContent(contentObj.textValue);
    }
  }, [postContent]);
  // props(postContent)를 인식할 때 useEffect를 실행해줘라 !

  console.log(postImg);

  return (
    <>
      <PostCardWrapper>
        <WriterInfo>
          <UserInfo size='medium' userInfoList={{ username, image }} text={accountname} />
          <button onClick={() => setIsModal(true)}>
            <img src={iconMore} alt='모달창 띄우는 버튼' />
          </button>
        </WriterInfo>
        <GetText>{content}</GetText>
        {postImg &&
          postImg.split(',').map(el => {
            return (
              <GetImg
                key={crypto.randomUUID()}
                src={`https://mandarin.api.weniv.co.kr/${el}`}
                alt='사용자가 업로드한 이미지'
              />
            );
          })}
        <ReactionSection />
        <UploadDate>
          {}년 {}월 {}일
        </UploadDate>
      </PostCardWrapper>
      {isModal && <Modal stateFunc={setIsModal} listObj={listObj} />};
    </>
  );
}
