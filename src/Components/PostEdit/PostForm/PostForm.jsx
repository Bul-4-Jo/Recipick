import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostFormWrapper } from './PostForm.style';
import { uploadImage, uploadPost } from './../../../API/api';
import { useUploadFile } from './../../../Hooks/useUploadFile';
import BtnUpload from '../../Common/BtnUpload/BtnUpload';
import PostImg from '../PostImg/PostImg';
import PostTag from '../PostTag/PostTag';
import PostText from '../PostText/PostText';

export default function PostForm() {
  const [textValue, setTextValue] = useState('');
  const [tagList, setTagList] = useState([]);
  const { uploadMultiFile, deleteFile, response } = useUploadFile();
  const navigate = useNavigate();

  const onSubmitHandler = async e => {
    e.preventDefault();

    const replacer = (_, value) => {
      if (value.length === 0) {
        return undefined;
      }
      return value;
    };

    const image = await uploadImage(response);
    const content = {
      textValue,
      tagList,
    };
    const post = {
      content: JSON.stringify(content, replacer) === '{}' ? '' : JSON.stringify(content, replacer),
      image,
    };
    const { id } = await uploadPost(post);
    // const postData = await uploadPost(post);
    // console.log(JSON.parse(postData.content));

    navigate(`/post/${id}`);
  };

  const PostImgMemo = useMemo(() => {
    return <PostImg response={response} deleteFile={deleteFile} />;
  }, [response]);

  return (
    <PostFormWrapper onSubmit={onSubmitHandler} id='postContent'>
      <PostTag tagList={tagList} setTagList={setTagList} />
      <PostText textValue={textValue} setTextValue={setTextValue} />
      {PostImgMemo}
      <BtnUpload size='large' uploadFile={uploadMultiFile} response={response} />
    </PostFormWrapper>
  );
}
