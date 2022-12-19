import React from 'react';
import { GetPostWrapper, ByAlbumWrapper, ByListWrapper } from './GetPost.style';
import ByAlbumOn from '../../../Assets/Icons/icon_post_album_on.png';
// import ByAlbumOff from '../../../Assets/Icons/icon_post_album_off.png';
import ByListOn from '../../../Assets/Icons/icon_post_list_on.png';
// import ByListOff from '../../../Assets/Icons/icon_post_list_off.png';

export default function GetPost() {
  return (
    <>
      <GetPostWrapper>
        <ByAlbumWrapper>
          <button>
            <img src={ByAlbumOn}></img>
          </button>
        </ByAlbumWrapper>
        <ByListWrapper>
          <button>
            <img src={ByListOn}></img>
          </button>
        </ByListWrapper>
      </GetPostWrapper>
    </>
  );
}
