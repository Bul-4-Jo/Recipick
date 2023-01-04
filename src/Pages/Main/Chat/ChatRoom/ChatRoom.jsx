import React, { useState } from 'react';
import BtnUpload from '../../../../Components/Common/BtnUpload/BtnUpload';
import Modal from '../../../../Components/Common/Modal/Modal';
import ProfileThumb from '../../../../Components/Common/ProfileThumb/ProfileThumb';
import { ChatRoomWrapper, LeftChat1, LeftChat2, RigthChat, LeftChatWrapper, InputWrapper } from './ChatRoom.style';

export default function ChatRoom({ stateFunc, response }) {
  const [isModal, setIsModal] = useState(false);
  const listObj = [
    {
      name: '채팅방 나가기',
      func: () => console.log('채팅방 나가기'),
    },
  ];

  return (
    <>
      <ChatRoomWrapper>
        <RigthChat>
          <div className='rightMsg'>다이어트하고 있는 입장에서 공유하신 레시피가 좋아서 DM드립니다.</div>
          <div className='rightMsg'>
            레시피 재료에 당근이 들어가 있는데 제가 당근을 싫어해서요😂
            <br />
            혹시 대체 재료가 있을까요?
          </div>
        </RigthChat>
        <LeftChatWrapper>
          <LeftChat1>
            <ProfileThumb size='medium' src={''} className='userProfile' />
            <div className='leftMsg'>
              당근대신 무 사용하시면 될거 같아요! <br />
              제가 지금 판매중인 상품 무에요 ㅎㅎ 유기농 무랍니다
            </div>
          </LeftChat1>
          <LeftChat2>
            <ProfileThumb size='medium' src={''} className='userProfile' />
            <img src='http://icoop.or.kr/coopmall/goodimages/70261E8700_SUB4.jpg' alt='판매중인 상품 무 사진'></img>
          </LeftChat2>
        </LeftChatWrapper>
        <InputWrapper>
          <BtnUpload stateFunc={stateFunc} response={response} />
          <input type='text' placeholder='메시지 입력하기...' />
          <button>전송</button>
        </InputWrapper>
      </ChatRoomWrapper>

      {isModal && <Modal listObj={listObj} />}
    </>
  );
}
