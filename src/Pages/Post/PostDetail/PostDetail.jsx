import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../../../Components/Comment/Comment';
import PostCard from '../../../Components/Common/PostCard/PostCard';
import { getPostDetail } from '../../../API/api';

export default function PostDetail() {
  const { postid } = useParams();
  const [isRender, setIsRender] = useState(false);

  // console.log(postid)
  const [postDetail, setPostDetail] = useState();

  useEffect(() => {
    getPostDetail(postid).then(response => {
      // console.log(response);
      setPostDetail(prev => response);
    });
    setIsRender(true);
  }, []);
  // const postImg = props.image.split('co.kr/')[1];
  console.log(postDetail);
  return (
    isRender &&
    postDetail && (
      <>
        <PostCard
          accountname={postDetail.post.author.accountname}
          username={postDetail.post.author.username}
          image={postDetail.post.author.image}
          postContent={postDetail.post.content}
          postImg={postDetail.post.image}
          uploadDate={postDetail.post.updatedAt}
          key={crypto.randomUUID()}
          commentCount={postDetail.post.commentCount}
          postid={postDetail.post.id}
        />
        <Comment />
      </>
    )
  );
}
