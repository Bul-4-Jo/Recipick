import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import TabMenu from '../TabMenu/TabMenu';
import { LayoutMainWrapper, LayoutIntroWrapper } from './Layout.style';

export function LayoutMain() {
  return (
    <LayoutMainWrapper>
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
  return (
    <LayoutMainWrapper>
      <Outlet />
    </LayoutMainWrapper>
  );
}
