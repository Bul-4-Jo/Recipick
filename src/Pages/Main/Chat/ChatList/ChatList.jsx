import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Modal from '../../../../Components/Common/Modal/Modal';

export default function ChatList() {
  const { isModal } = useOutletContext();
  const listObj = [
    {
      name: '설정 및 개인정보',
      func: () => console.log('설정 및 개인정보'),
    },
    {
      name: '로그아웃',
      func: () => console.log('로그아웃'),
    },
  ];

  return <>{isModal && <Modal listObj={listObj} />}</>;
}
