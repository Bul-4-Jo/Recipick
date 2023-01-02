import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../../../Components/Comment/Comment';
import PostCard from '../../../Components/Common/PostCard/PostCard';
import { getPostDetail } from '../../../API/api';

export default function PostDetail() {
  const { postid } = useParams();
  const [ isRender, setIsRender ] = useState(false);

  // console.log(postid)
  const [ postDetail, setPostDetail ] = useState();

  useEffect(() => {
    getPostDetail(postid).then(response => {
      // console.log(response);
      setPostDetail(prev => response);
    });
    setIsRender(true);
  }, []);
  // const postImg = props.image.split('co.kr/')[1];

  return (
    isRender && (
      <>
        <PostCard
          name={postDetail?.author.accountname}
          username={postDetail?.author.username}
          image={postDetail?.author.image}
          postContent={postDetail?.content}
          postImg={postDetail?.image}
          uploadDate={postDetail?.updatedAt}
          key={crypto.randomUUID()}
        />
        <Comment />
      </>
    )
  );
}
