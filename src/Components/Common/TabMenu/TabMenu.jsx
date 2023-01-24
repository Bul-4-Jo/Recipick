import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TabMenuWrapper } from './TabMenu.style';

export default function TabMenu() {
  const { pathname } = useLocation();

  const accountName = localStorage.getItem('user ID');

  const setTabMenuRendered = () => {
    const [first, ...last] = pathname.split('/').slice(1);

    if (first === 'post') return false;
    if (first === 'product') return false;
    if (first === 'chat' && last.length > 0) return false;
    if (last.includes('edit')) return false;

    return true;
  };

  return (
    setTabMenuRendered() && (
      <TabMenuWrapper type={pathname.split('/')[1]}>
        <Link to='/home' className='home'>
          홈
        </Link>
        <Link to='/chat' className='chat'>
          채팅
        </Link>
        <Link to='/post/upload' className='post'>
          게시물 작성
        </Link>

        <Link to={`/profile/${accountName}`} className='profile'>
          프로필
        </Link>
      </TabMenuWrapper>
    )
  );
}
