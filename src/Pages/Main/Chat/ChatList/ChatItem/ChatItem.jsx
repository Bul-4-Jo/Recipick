import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChatItemWrapper,
  ProfileImgWrapper,
  Dot,
  ItemContent,
  ChatItemTime,
  UserNameWrapper,
  ItemContentText,
} from './ChatItem.style';
import ProfileThumb from '../../../../../Components/Common/ProfileThumb/ProfileThumb';

export default function ChatItem({ userId, userName, chatContent = '대화내용이 없습니다.', userImg, userState }) {
  const navigate = useNavigate();

  return (
    <ChatItemWrapper onClick={() => navigate(`${userId}`, { state: { userName, userImg } })}>
      <ProfileImgWrapper>
        <ProfileThumb size='medium' src={userImg} />
        {userState ? <Dot /> : null}
      </ProfileImgWrapper>
      <ItemContent>
        <UserNameWrapper>{userName}</UserNameWrapper>
        <ItemContentText>{chatContent}</ItemContentText>
      </ItemContent>
      <ChatItemTime datetime='2020-10-25'>2020.10.25</ChatItemTime>
    </ChatItemWrapper>
  );
}
