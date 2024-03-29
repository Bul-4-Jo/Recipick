import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { PageWrapper, LogoWrapper } from './Splash.style';
import { ReactComponent as Logo } from '../../Assets/Images/logo.svg';
import { getCookie } from '../../Cookie/Cookie';

function Splash() {
  const navigate = useNavigate();

  const token = getCookie('Token');

  useEffect(() => {
    const tiemCheck = setTimeout(() => {
      token ? navigate('/home') : navigate('/login');
      return clearTimeout(tiemCheck);
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
