import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageWrapper, LogoWrapper, LogoWrap } from './Splash.style';
import { ReactComponent as Logo } from '../../Assets/Images/logo.svg';
// import Logo from '../../Assets/Images/logo_w_name_hq.png';

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
        <Logo width='100%' height='100%' style={{ 'max-width': '250px' }} />
        {/* <LogoWrap src={Logo} alt='' /> */}
      </LogoWrapper>
    </PageWrapper>
  );
}

export default Splash;
