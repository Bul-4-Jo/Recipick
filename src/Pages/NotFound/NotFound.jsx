import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Assets/Images/NotFound_img.svg';
import Button from '../../Components/Common/Button/Button.style';
import { SectionWrapper, ContentWrapper } from './NotFound.style';

function NotFound() {
  const navigate = useNavigate();

  return (
    <SectionWrapper>
      <ContentWrapper>
        <Logo width='300px' height='300px' />
        <Button onClick={() => navigate(-1)} className='medium' active={false} disabled={false} content={'Go Back'} />
      </ContentWrapper>
    </SectionWrapper>
  );
}
