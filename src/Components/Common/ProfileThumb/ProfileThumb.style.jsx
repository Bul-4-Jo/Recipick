import styled, { css } from 'styled-components';
import basicProfileImage from '../../../Assets/Images/img_profile_basic.png';

const setSize = size => {
  switch (size) {
    case 'small':
      return css`
        width: 36px;
        height: 36px;
      `;

    case 'medium':
      return css`
        width: 42px;
        height: 42px;
      `;

    default:
      return css`
        width: 110px;
        height: 110px;
      `;
  }
};

export const ProfileThumbWrapper = styled.div`
  ${({ size }) => setSize(size)}

  position: relative;
  border-radius: 50%;
  box-sizing: border-box;
  background: url(${basicProfileImage}) no-repeat center / calc(100% + 2px) auto;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
