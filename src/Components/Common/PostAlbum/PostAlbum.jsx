import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PostAlbumWrapper, AlbumImgItem } from './PostAlbum.style';
import Iconlayers from './../../../Assets/Icons/icon_layers.png';

export default function PostAlbum({ postImg, postid }) {
  const [img, setImg] = useState([]);
  const urlPostid = useParams();
  const pagePostId = urlPostid.postid;
  const navigate = useNavigate();
  const pageNavigate = (url, postId) => {
    if (!url) {
      navigate(`/post/${postId}`);
    }
  };

  useEffect(() => {
    if (!postImg) {
      return;
    }
    if (postImg.includes(',')) {
      setImg(postImg.split(','));
    } else {
      setImg([postImg]);
    }
  }, [postImg]);

  return (
    <>
      <PostAlbumWrapper>
        {postImg &&
          (img.length > 1 ? (
            <AlbumImgItem onClick={() => pageNavigate(pagePostId, postid)}>
              <img className='multiImage' src={img[0]} alt='사용자가 업로드한 이미지' />
              <img
                className='layerIcon'
                src={Iconlayers}
                alt='사용자가 업로드한 이미지가 여러 개인 것을 알려주는 아이콘'
              />
            </AlbumImgItem>
          ) : (
            <AlbumImgItem onClick={() => pageNavigate(pagePostId, postid)}>
              <img className='multiImage' src={img[0]} alt='사용자가 업로드한 이미지' />
            </AlbumImgItem>
          ))}
      </PostAlbumWrapper>
    </>
  );
}
