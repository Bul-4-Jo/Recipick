import React, { useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { PostFormWrapper } from './PostForm.style';
import { editPost, uploadImages, uploadPost } from './../../../API/api';
import { useUploadFile } from './../../../Hooks/useUploadFile';
import BtnUpload from '../../Common/BtnUpload/BtnUpload';
import PostImg from '../PostImg/PostImg';
import PostTag from '../PostTag/PostTag';
import PostText from '../PostText/PostText';
import PostBtnPortal from './../PostBtn/PostBtn';

export default function PostForm({ postDetail }) {
  const [textValue, setTextValue] = useState('');
  const [textDishName, setTextDishName] = useState('');
  const [textCookingTime, setTextCookingTime] = useState('');
  const [radioDifficulty, setRadioDifficulty] = useState('');

  const [tagList, setTagList] = useState([]);
  const [isValid, setValid] = useState();
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

    const image = await uploadImages(response);

    const content = {
      textDishName,
      textCookingTime,
      radioDifficulty,
      textValue,
      tagList,
    };
    const post = {
      content: JSON.stringify(content, replacer) === '{}' ? '' : JSON.stringify(content, replacer),
      image,
    };

    if (postDetail) {
      const { id } = postDetail;

      await editPost(id, post);

      navigate(`/post/${id}`);
    } else {
      const { id } = await uploadPost(post);

      navigate(`/post/${id}`);
    }
  };

  const PostImgMemo = useMemo(() => {
    return <PostImg response={response} deleteFile={deleteFile} />;
  }, [response]);

  useEffect(() => {
    if (!textValue || !textDishName || !textCookingTime || !radioDifficulty) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [textValue, textDishName, textCookingTime, radioDifficulty, response.length]);

  useEffect(() => {
    if (postDetail) {
      const { content, image } = postDetail;

      const urlToFile = async url => {
        const fileData = await axios({
          url,
          method: 'get',
          responseType: 'blob',
        });
        const fileName = url.split('/').pop();
        const fileExt = url.split('.').pop();
        const metaData = { type: `image/${fileExt}` };

        return new File([fileData.data], fileName, metaData);
      };

      if (content) {
        const contentObj = JSON.parse(content);

        setTextDishName(contentObj.textDishName);
        setTextCookingTime(contentObj.textCookingTime);
        setTextValue(contentObj.textValue);

        if (contentObj.tagList) {
          setTagList(contentObj.tagList);
        }
      }

      if (image) {
        const imgArry = image.split(',');

        for (let i = 0; i < imgArry.length; i++) {
          urlToFile(imgArry[i]).then(img => uploadMultiFile(img));
        }
      }
    }
  }, []);

  return (
    <PostFormWrapper onSubmit={onSubmitHandler} id='postContent'>
      <PostTag tagList={tagList} setTagList={setTagList} />
      <PostText
        textValue={textValue}
        setTextValue={setTextValue}
        textDishName={textDishName}
        setTextDishName={setTextDishName}
        textCookingTime={textCookingTime}
        setTextCookingTime={setTextCookingTime}
        radioDifficulty={radioDifficulty}
        setRadioDifficulty={setRadioDifficulty}
      />
      {PostImgMemo}
      <BtnUpload size='large' stateFunc={uploadMultiFile} response={response} />
      <PostBtnPortal isValid={isValid} />
    </PostFormWrapper>
  );
}
