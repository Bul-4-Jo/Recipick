import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Modal from '../../../../Components/Common/Modal/Modal';

export default function ChatRoom() {
  const { isModal } = useOutletContext();
  const listObj = [
    {
      name: '채팅방 나가기',
      func: () => console.log('채팅방 나가기'),
    },
  ];

  return <>{isModal && <Modal listObj={listObj} />}</>;
}
