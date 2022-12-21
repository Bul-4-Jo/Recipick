import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Assets/Images/NotFound_img.svg';
import Button from '../../Components/Common/Button/Button';
import { SectionWrapper } from './NotFound.style';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <SectionWrapper>
      <Logo width='200px' height='200px' />
      <Button onClick={() => navigate(-1)} className='medium' active={false} disabled={false} content={'Go Back'} />
    </SectionWrapper>
  );
}
