import React, { useRef, useEffect } from 'react';
import { PostTextArea, PostPreview, PostTextWrapper } from './PostText.style';

export default function PostText1({ textValue, setTextValue }) {
  const textareaRef = useRef();
  const resizeTextArea = target => {
    target.style.height = '1px';
    target.style.height = `${target.scrollHeight}px`;
  };

  const onChangeHandler = e => {
    setTextValue(e.target.value);
  };

  useEffect(() => {
    let timer;

    const onResizeHandler = () => {
      clearTimeout(timer);
      timer = setTimeout(() => resizeTextArea(textareaRef.current), 300);
    };

    window.addEventListener('resize', onResizeHandler);
    return () => {
      window.removeEventListener('resize', onResizeHandler);
    };
  }, []);

  useEffect(() => {
    resizeTextArea(textareaRef.current);
  }, [textValue]);

  return (
    <>
      <PostTextWrapper>
        <label className='screen-out' htmlFor='txtRecipe'>
          레시피 입력
        </label>
        <PostPreview>
          <label htmlFor='dishName'>1. 요리 이름 : </label>
          <input type='text' id='dishName' />
          <label htmlFor='cookingTime'>2. 예상 조리 시간 : </label>
          <input type='number' id='cookingTime' />
          <p>3. 난이도 : </p>
          <div>
            <label htmlFor='high'>
              상 <input type='radio' id='high' name='difficulty' />
            </label>
            <label htmlFor='middle'>
              중 <input type='radio' id='middle' name='difficulty' />
            </label>
            <label htmlFor='low'>
              하 <input type='radio' id='low' name='difficulty' />
            </label>
          </div>
          <label>4. 조리 순서 : </label>
        </PostPreview>
        <PostTextArea
          ref={textareaRef}
          value={textValue}
          onChange={onChangeHandler}
          id='txtRecipe'
          placeholder='레시피 입력하기...'
        ></PostTextArea>
      </PostTextWrapper>
    </>
  );
}
