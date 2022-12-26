import React from 'react';
import { CommentInputBox, CommentInput, UserWrapper } from './MyCommentInput.style';
import ProfileThumb from '../Common/ProfileThumb/ProfileThumb';
import Button from '../Common/Button/Button';

export function MyCommentInput({ inputValue }) {
  return (
    <CommentInputBox>
      <UserWrapper>
        <ProfileThumb size='small' />
        <CommentInput placeholder='댓글 입력하기' /> {/* <PostContent content={inputValue} />; */}
      </UserWrapper>
      <Button className='small' content='게시' />
    </CommentInputBox>
  );
}
