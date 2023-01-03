import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getComment } from '../../API/api';
import { CommentSection, CommentListWrapper } from './Comment.style';
import { MyCommentInput } from '../CommentItem/MyCommentInput';

import { UserComment } from '../CommentItem/UserComment';

export default function Comment() {
  const { postid } = useParams();
  const [isCommentRender, setIsCommentRender] = useState(false);
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    getComment(postid).then(res => {
      setCommentList(prev => {
        const sortCommentList = res.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

        return sortCommentList;
      });
    });
  }, [isCommentRender]);
  return (
    <>
      <CommentSection>
        <CommentListWrapper>
          {commentList &&
            commentList.map(comment => (
              <UserComment
                key={crypto.randomUUID()}
                accountname={comment.author.accountname}
                username={comment.author.username}
                image={comment.author.image}
                content={comment.content}
                uploadDate={comment.createdAt}
                postid={postid}
                commentId={comment.id}
                setCommentList={setCommentList}
              />
            ))}
        </CommentListWrapper>
      </CommentSection>
      <MyCommentInput stateFunc={setIsCommentRender} />
    </>
  );
}
