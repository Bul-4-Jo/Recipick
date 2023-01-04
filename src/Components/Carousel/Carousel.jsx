import React, { useEffect, useRef, useState } from 'react';
import { CarouselList, CarouselWrapper, BtnPrev, BtnNext, Indicator, IndicatorItem } from './Carousel.style';

export default function Carousel({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef();
  const total = useRef(children.length - 1);

  const NextClickHandler = e => {
    e.stopPropagation();
    if (currentSlide >= total.current) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevClickHandler = e => {
    e.stopPropagation();
    if (currentSlide === 0) {
      setCurrentSlide(total.current);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const IndicatorClickHandler = (e, index) => {
    e.stopPropagation();
    setCurrentSlide(index);
  };

  useEffect(() => {
    carouselRef.current.style.transition = 'all 0.5s ease-in-out';
    carouselRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <CarouselWrapper>
      <BtnPrev onClick={prevClickHandler} type='button'>
        <span className='screen-out'>이전 슬라이드</span>
      </BtnPrev>
      <CarouselList ref={carouselRef}>{children}</CarouselList>
      <BtnNext onClick={NextClickHandler} type='button'>
        <span className='screen-out'>다음</span>
      </BtnNext>
      <Indicator>
        {children.map((_, index) => {
          const isActive = index === currentSlide;

          return (
            <IndicatorItem onClick={e => IndicatorClickHandler(e, index)} isActive={isActive} key={crypto.randomUUID()}>
              <span className='screen-out'>{`${index}번 째 슬라이드로 이동`}</span>
            </IndicatorItem>
          );
        })}
      </Indicator>
    </CarouselWrapper>
  );
}
