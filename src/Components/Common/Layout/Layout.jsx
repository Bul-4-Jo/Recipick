import React from 'react';
import { Outlet } from 'react-router-dom';
import TabMenu from '../TabMenu/TabMenu';
import { LayoutMainWrapper, LayoutIntroWrapper } from './Layout.style';
import BasicHeader from '../Header/BasicHeader';

export function LayoutMain() {
  return (
    <LayoutMainWrapper>
      <BasicHeader />
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
