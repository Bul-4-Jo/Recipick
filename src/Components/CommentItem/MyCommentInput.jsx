import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CommentInputBox, CommentInput, UserWrapper } from './MyCommentInput.style';
import { uploadComment, getMyInfo } from '../../API/api';
import ProfileThumb from '../Common/ProfileThumb/ProfileThumb';
import Button from '../Common/Button/Button';

export function MyCommentInput({ stateFunc }) {
  const { postid } = useParams();
  const [userImg, setUserImg] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isButtonEnabled, setButtonEnabled] = useState('');

  useEffect(() => {
    getMyInfo().then(res => setUserImg(res.user.image));
  });

  const onChangeKeyword = e => {
    const value = e.target.value;

    setInputValue(prev => value);
  };

  const comment = { content: inputValue };

  const commentInput = async e => {
    e.preventDefault();
    if (inputValue) {
      await uploadComment(comment, postid).then(res => console.log(res));
      stateFunc(prev => !prev);
      setInputValue(prev => '');
    } else if (!inputValue) {
      alert('내용없음');
    }
  };

  useEffect(() => {
    if (!inputValue) {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }
  }, [inputValue]);

  return (
    <CommentInputBox onSubmit={commentInput}>
      <UserWrapper>
        <ProfileThumb src={userImg} size='small' />
        <CommentInput placeholder='댓글 입력하기' onChange={onChangeKeyword} value={inputValue} />
      </UserWrapper>
      <Button className='small' content='게시' disabled={isButtonEnabled} />
    </CommentInputBox>
  );
}
