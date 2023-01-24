import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Comment from '../../../Components/Comment/Comment';
import PostCard from '../../../Components/Common/PostCard/PostCard';
import { deletePost, getPostDetail } from '../../../API/api';
import Product from './../../../Components/Product/Product';

export default function PostDetail() {
  const { postid } = useParams();
  const [isRender, setIsRender] = useState(false);

  const [postDetail, setPostDetail] = useState();
  const [tagList, setTagList] = useState([]);

  const navigate = useNavigate();

  const deletePostHandler = () => {
    const { accountname } = postDetail.post.author;

    deletePost(postid);
    navigate(`/profile/${accountname}`);
  };

  useEffect(() => {
    getPostDetail(postid).then(response => {
      setPostDetail(prev => response);
      try {
        const contentObj = JSON.parse(response.post.content);

        setTagList(contentObj.tagList || []);
      } catch (error) {
        if (error instanceof SyntaxError) {
          setTagList([]);
        }
      }
    });
    setIsRender(true);
  }, []);

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
          deletePostHandler={deletePostHandler}
        >
          <Product accountName={postDetail.post.author.accountname} tagList={tagList} />
          <Comment />
        </PostCard>
      </>
    )
  );
}
