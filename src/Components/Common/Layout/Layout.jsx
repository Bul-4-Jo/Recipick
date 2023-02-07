import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import TabMenu from '../TabMenu/TabMenu';
import { LayoutMainWrapper, LayoutIntroWrapper } from './Layout.style';

export function LayoutMain() {
  return (
    <LayoutMainWrapper isJoin={false}>
      <Header />
      <Outlet />
      <TabMenu />
    </LayoutMainWrapper>
  );
}

export function LayoutIntro() {
  return (
    <LayoutIntroWrapper>
      <Outlet />
    </LayoutIntroWrapper>
  );
}

export function LayOutJoin() {
  const { pathname } = useLocation();
  const [first, ...last] = pathname.split('/').slice(1);

  return (
    <LayoutMainWrapper isJoin={first === 'join'}>
      <Outlet />
    </LayoutMainWrapper>
  );
}
