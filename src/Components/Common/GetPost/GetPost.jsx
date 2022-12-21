import React from 'react';
import { GetPostWrapper, ByAlbumWrapper, ByListWrapper } from './GetPost.style';
import ByListOn from '../../../Assets/Icons/icon_post_list_on.png';
// import ByListOff from '../../../Assets/Icons/icon_post_list_off.png';
// import ByAlbumOn from '../../../Assets/Icons/icon_post_album_on.png';
import ByAlbumOff from '../../../Assets/Icons/icon_post_album_off.png';

export default function GetPost() {
  return (
    <>
      <GetPostWrapper>
        <ByListWrapper>
          <button>
            <img src={ByListOn} alt='게시물 리스트형으로 보기 버튼' />
          </button>
        </ByListWrapper>
        <ByAlbumWrapper>
          <button>
            <img src={ByAlbumOff} alt='게시물 사진 앨범형으로 보기 버튼' />
          </button>
        </ByAlbumWrapper>
      </GetPostWrapper>
    </>
  );
}
