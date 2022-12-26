import React, { useState } from 'react';
import { PostTagItem, PostTagWrapper } from './PostTag.style';
import IconDelete from '../../../Assets/Icons/icon_x_dark.png';

export default function PostTag({ tagList, setTagList }) {
  const [inputValue, inPutTagValue] = useState('');

  const onChangeHandler = e => {
    inPutTagValue(e.target.value);
  };

  const onKeyDownHandler = e => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (e.target.value.length === 0) return;

      setTagList(prev => [...new Set([...prev, inputValue])]);
      inPutTagValue('');
    }
  };

  const onClickHandler = target => {
    setTagList(prev => prev.filter(tag => tag !== target));
  };

  return (
    <PostTagWrapper>
      {tagList &&
        tagList.map(tag => (
          <PostTagItem onClick={() => onClickHandler(tag)} key={crypto.randomUUID()} type='button'>
            {tag} <img src={IconDelete} alt='이미지 삭제' />
          </PostTagItem>
        ))}
      <label className='screen-out' htmlFor='txtTag'>
        재료 입력
      </label>
      <input
        value={inputValue}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        type='text'
        id='txtTag'
        placeholder='엔터키로 재료를 추가하기...'
      ></input>
    </PostTagWrapper>
  );
}
