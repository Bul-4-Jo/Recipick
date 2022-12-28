import React, { useState } from 'react';
import Modal from '../../../../Components/Common/Modal/Modal';

export default function ChatRoom() {
  const [isModal, setIsModal] = useState(false);
  const listObj = [
    {
      name: '채팅방 나가기',
      func: () => console.log('채팅방 나가기'),
    },
  ];

  return <>{isModal && <Modal listObj={listObj} />}</>;
}
