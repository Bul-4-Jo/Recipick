import React, { useEffect, useState } from 'react';
import { GetPostWrapper, ByAlbumWrapper, ByListWrapper } from './GetPost.style';
import PostCard from '../../../Components/Common/PostCard/PostCard';
import ByAlbumOn from '../../../Assets/Icons/icon_post_album_on.png';
import ByAlbumOff from '../../../Assets/Icons/icon_post_album_off.png';
import ByListOn from '../../../Assets/Icons/icon_post_list_on.png';
import ByListOff from '../../../Assets/Icons/icon_post_list_off.png';
import { getPost } from './../../../API/api';

export default function GetPost({ userId }) {
  const [btnState, setBtnState] = useState('list');
  const [res, setRes] = useState([]);

  function toggleBtnState() {
    btnState === 'list' ? setBtnState('album') : setBtnState('list');
  }

  useEffect(() => {
    if (userId) {
      getPost(userId).then(response => {
        setRes(response.post);
      });
    }
  }, [userId]);

  return (
    <>
      <GetPostWrapper>
        <ByListWrapper>
          <button onClick={toggleBtnState}>
            <img src={btnState === 'list' ? ByListOn : ByListOff} alt='게시물 리스트로 보기 버튼' />
          </button>
        </ByListWrapper>
        <ByAlbumWrapper>
          <button onClick={toggleBtnState}>
            <img src={btnState === 'list' ? ByAlbumOff : ByAlbumOn} alt='사용자 게시물 사진 앨범형으로 보기 버튼' />
          </button>
        </ByAlbumWrapper>
      </GetPostWrapper>
      {/* <PostCard /> */}
      {res.map(el => {
        return (
          <PostCard
            accountname={el.author.accountname}
            username={el.author.username}
            image={el.author.image}
            postContent={el.content}
            postImg={el.image}
          />
        );
      })}
    </>
  );
}
