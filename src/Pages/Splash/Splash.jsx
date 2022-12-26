import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageWrapper, LogoWrapper } from './Splash.style';
import { ReactComponent as Logo } from '../../Assets/Images/logo.svg';

function Splash() {
  const navigate = useNavigate();

  const token = localStorage.getItem('Access Token');

  useEffect(() => {
    setTimeout(() => {
      token ? navigate('/main') : navigate('/login');
    }, 2000);
  }, []);

  return (
    <PageWrapper>
      <LogoWrapper>
        <Logo width='100%' height='100%' />
      </LogoWrapper>
    </PageWrapper>
  );
}

export default Splash;
