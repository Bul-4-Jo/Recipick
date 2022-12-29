import React, { useState, useEffect } from 'react';
import { PostAlbumWrapper, SingleImg, MultiImg, layerIcon } from './PostAlbum.style';
import Iconlayers from './../../../Assets/Icons/icon_layers.png';

export default function PostAlbum({ postImg }) {
  const [img, setImg] = useState([]);

  useEffect(() => {
    console.log(postImg);
    console.log(img);
    setImg(postImg);
    // const length = arry.length;
  }, [postImg]);

  return (
    <>
      <PostAlbumWrapper>
        {postImg && (
          <MultiImg>
            <img
              className='multiImage'
              src={`https://mandarin.api.weniv.co.kr/${img}`}
              alt='사용자가 업로드한 이미지'
            />
            <img
              className='layerIcon'
              src={Iconlayers}
              alt='사용자가 업로드한 이미지가 여러 개인 것을 알려주는 아이콘'
            />
          </MultiImg>
        )}
        : {}
      </PostAlbumWrapper>
    </>
  );
}
