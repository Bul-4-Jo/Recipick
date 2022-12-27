import React from 'react';
import { PostTextArea } from './PostText.style';

export default function PostText({ textValue, setTextValue }) {
  const resizeTextArea = target => {
    target.style.height = '1px';
    target.style.height = `${target.scrollHeight}px`;
  };

  const onChangeHandler = e => {
    resizeTextArea(e.target);
    setTextValue(e.target.value);
  };

  return (
    <>
      <label className='screen-out' htmlFor='txtRecipe'>
        레시피 입력
      </label>
      <PostTextArea
        value={textValue}
        onChange={onChangeHandler}
        id='txtRecipe'
        placeholder='레시피 입력하기...'
      ></PostTextArea>
    </>
  );
}
