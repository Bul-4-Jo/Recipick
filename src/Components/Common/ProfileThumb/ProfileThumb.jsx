import React, { useState } from 'react';
import { ProfileThumbWrapper } from './ProfileThumb.style';
import userDefaultImage from '../../../Assets/Images/img_profile_basic.png';

export default function ProfileThumb({ src, userName, size }) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(userDefaultImage);
  };

  return (
    <ProfileThumbWrapper source={src} size={size}>
      <img src={imgSrc} alt={userName} onError={handleError} />
    </ProfileThumbWrapper>
  );
}
