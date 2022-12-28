import React from 'react';
import { PostAlbumWrapper, SingleImg, MultiImg, layerIcon } from './PostAlbum.style';
import Iconlayers from './../../../Assets/Icons/icon_layers.png';

export default function PostAlbum({ postImg }) {
  return (
    <>
      <PostAlbumWrapper>
        {postImg &&
          postImg.split(',').map(el => {
            if (postImg.split(',').length === 1) {
              return <SingleImg src={`https://mandarin.api.weniv.co.kr/${el}`} alt='사용자가 업로드한 1개의 이미지' />;
            } else {
              return (
                <>
                  <MultiImg>
                    <img
                      className='multiImage'
                      src={`https://mandarin.api.weniv.co.kr/${el}`}
                      alt='사용자가 업로드한 여러개의 이미지'
                    />
                    <img
                      className='layerIcon'
                      src={Iconlayers}
                      alt='사용자가 업로드한 이미지가 여러 개인 것을 알려주는 아이콘'
                    />
                  </MultiImg>
                </>
              );
            }
          })}
      </PostAlbumWrapper>
    </>
  );
}
