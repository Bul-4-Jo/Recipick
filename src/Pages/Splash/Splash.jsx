import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { PageWrapper, LogoWrapper } from './Splash.style';
import logo from '../../Assets/Images/logo_w_name_hq_low.png';

function Splash() {
  const navigate = useNavigate();

  const token = localStorage.getItem('Access Token');

  useEffect(() => {
    const tiemCheck = setTimeout(() => {
      token ? navigate('/home') : navigate('/login');
      return clearTimeout(tiemCheck);
    }, 2000);
  }, []);

  return (
    <PageWrapper>
      <LogoWrapper>
        <img src={logo} alt='' />
      </LogoWrapper>
    </PageWrapper>
  );
}

export default Splash;
