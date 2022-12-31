import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../../../Components/Comment/Comment';
import PostCard from '../../../Components/Common/PostCard/PostCard';
import { getPostDetail } from '../../../API/api';

export default function PostDetail(props) {
  const [postDetail, setPostDetail] = useState([]);

  // useEffect(() => {
  //   getPostDetail().then(response => setPostDetail(response));
  // }, []);
  // const postImg = props.image.split('co.kr/')[1];

  return (
    <>
      <PostCard
        accountname={props.accountname}
        username={props.username}
        image={props.image}
        postContent={props.content}
        // postImg={postImg}
        uploadDate={props.updatedAt}
        key={crypto.randomUUID()}
      />
      <Comment />
    </>
  );
}
