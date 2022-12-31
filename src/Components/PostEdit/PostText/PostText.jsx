import React, { useRef, useEffect } from 'react';
import { PostTextArea } from './PostText.style';

export default function PostText({ textValue, setTextValue }) {
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
      <label className='screen-out' htmlFor='txtRecipe'>
        레시피 입력
      </label>
      <PostTextArea
        ref={textareaRef}
        value={textValue}
        onChange={onChangeHandler}
        id='txtRecipe'
        placeholder='레시피 입력하기...'
      ></PostTextArea>
    </>
  );
}
