import styled, { css } from 'styled-components';
import iconArrowRight from '../../Assets/Icons/icon_slide_arrow_right.png';
import iconArrowLeft from '../../Assets/Icons/icon_slide_arrow_left.png';

export const CarouselWrapper = styled.div`
  position: relative;
  width: 70vw;
  max-width: 560px;
  margin: 0 20px 12px 65px;
  border-radius: 10px;
  overflow: hidden;
`;

export const CarouselList = styled.div`
  display: flex;

  > * {
    flex: 0 0 auto;
    margin: 0;
  }

  img {
    width: 100%;
    object-fit: cover;
    max-width: none;
    aspect-ratio: 4 / 3;
  }
`;

const btnStyle = css`
  position: absolute;
  top: 0;
  width: 50px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30px auto;
  opacity: 0;
  z-index: 10;
  transition: 0.3s ease-in;

  &:hover {
    opacity: 1;
  }
`;

export const BtnPrev = styled.button`
  ${btnStyle}
  left: 0;
  background-image: url(${iconArrowLeft});
`;

export const BtnNext = styled.button`
  ${btnStyle}
  right: 0;
  background-image: url(${iconArrowRight});
`;

export const Indicator = styled.ul`
  display: flex;
  justify-content: center;
  gap: 12px;
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
`;

export const IndicatorItem = styled.li`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.ground};
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
    `}
`;
