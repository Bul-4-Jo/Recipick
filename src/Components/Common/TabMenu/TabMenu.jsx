import React from 'react';
import { useLocation } from 'react-router-dom';
import { TabMenuWrapper } from './TabMenu.style';

export default function TabMenu() {
  const { pathname } = useLocation();

  return (
    <TabMenuWrapper type={pathname}>
      <a className='home' href='/'>
        홈
      </a>
      <a className='chat' href='/'>
        채팅
      </a>
      <a className='post' href='/'>
        게시물 작성
      </a>
      <a className='profile' href='/'>
        프로필
      </a>
    </TabMenuWrapper>
  );
}
