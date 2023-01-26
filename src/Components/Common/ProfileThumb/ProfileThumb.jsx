import React, { useState } from 'react';
import { ProfileThumbWrapper } from './ProfileThumb.style';
import userDefalutImage from '../../../Assets/Images/img_profile_basic.png';

export default function ProfileThumb({ src, userName, size }) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => setImgSrc(userDefalutImage);

  return (
    <ProfileThumbWrapper src={imgSrc} size={size}>
      {!!src.length && <img src={imgSrc} alt={userName} onError={handleError} />}
    </ProfileThumbWrapper>
  );
}
