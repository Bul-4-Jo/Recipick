import React, { useRef, useEffect } from 'react';
import { PostTextArea, PostPreview, PostTextWrapper } from './PostText.style';

export default function PostText({
  textValue,
  setTextValue,
  textDishName,
  setTextDishName,
  textCookingTime,
  setTextCookingTime,
  radioDifficulty,
  setRadioDifficulty,
}) {
  const textareaRef = useRef();
  const dishNameRef = useRef();
  const cookingTimeRef = useRef();

  const resizeTextArea = target => {
    target.style.height = '1px';
    target.style.height = `${target.scrollHeight + 2}px`;
  };

  const recipeChangeHandler = e => {
    setTextValue(e.target.value);
  };

  const dishNameChangeHandler = e => {
    setTextDishName(e.target.value);
  };

  const timeChangeHandler = e => {
    setTextCookingTime(e.target.value);
  };

  const difficultyChanageHandler = e => {
    setRadioDifficulty(e.target.id);
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
        <PostPreview>
          <label htmlFor='dishName'>1. 요리 이름 : </label>
          <input
            type='text'
            id='dishName'
            required
            ref={dishNameRef}
            value={textDishName}
            onChange={dishNameChangeHandler}
          />
          <label htmlFor='cookingTime'>2. 예상 조리 시간 : </label>
          <input
            type='number'
            id='cookingTime'
            required
            ref={cookingTimeRef}
            value={textCookingTime}
            onChange={timeChangeHandler}
          />
          <p>3. 난이도 : </p>
          <div>
            <label>
              상
              <input
                id='high'
                value='high'
                checked={radioDifficulty === 'high'}
                onChange={difficultyChanageHandler}
                type='radio'
                name='difficulty'
              />
            </label>
            <label>
              중
              <input
                id='middle'
                value='middle'
                checked={radioDifficulty === 'middle'}
                onChange={difficultyChanageHandler}
                type='radio'
                name='difficulty'
              />
            </label>
            <label>
              하
              <input
                id='low'
                value='하'
                checked={radioDifficulty === 'low'}
                onChange={difficultyChanageHandler}
                type='radio'
                name='difficulty'
              />
            </label>
          </div>
          <label>4. 조리 순서 : </label>
        </PostPreview>
        <label className='screen-out' htmlFor='txtRecipe'>
          레시피 입력
        </label>
        <PostTextArea
          ref={textareaRef}
          value={textValue}
          onChange={recipeChangeHandler}
          id='txtRecipe'
          placeholder='레시피 입력하기...'
        ></PostTextArea>
      </PostTextWrapper>
    </>
  );
}
