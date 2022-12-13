import React from 'react';
import { ProfileThumbWrapper } from './ProfileThumb.style';

export default function ProfileThumb({ src, userName, size }) {
  return <ProfileThumbWrapper size={size}>{src && <img src={src} alt={userName} />}</ProfileThumbWrapper>;
}
