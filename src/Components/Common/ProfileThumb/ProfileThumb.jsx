import React from 'react';
import { ProfileThumbWrapper } from './ProfileThumb.style';

export default function ProfileThumb({ src = [], userName, size }) {
  return (
    <ProfileThumbWrapper src={src} size={size}>
      {!!src.length && <img src={src} alt={userName} />}
    </ProfileThumbWrapper>
  );
}
