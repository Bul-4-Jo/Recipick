import React, { useEffect, useState } from 'react';
import { GetPostWrapper, ByAlbumWrapper, ByListWrapper, AlbumWrapper } from './GetPost.style';
import PostCard from '../../../Components/Common/PostCard/PostCard';
import ByAlbumOn from '../../../Assets/Icons/icon_post_album_on.png';
import ByAlbumOff from '../../../Assets/Icons/icon_post_album_off.png';
import ByListOn from '../../../Assets/Icons/icon_post_list_on.png';
import ByListOff from '../../../Assets/Icons/icon_post_list_off.png';
import { getPost, deletePost } from './../../../API/api';
import PostAlbum from './../../../Components/Common/PostAlbum/PostAlbum';

export default function GetPost({ userId }) {
  const [btnState, setBtnState] = useState('list');
  const [res, setRes] = useState([]);

  function toggleBtnState() {
    btnState === 'list' ? setBtnState('album') : setBtnState('list');
  }

  const deletePostHandler = id => {
    deletePost(id);
    setRes(prev => prev.filter(post => post.id !== id));
  };

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
            <img src={btnState === 'list' ? ByListOn : ByListOff} alt='사용자 게시물 리스트형으로 보기 버튼' />
          </button>
        </ByListWrapper>
        <ByAlbumWrapper>
          <button onClick={toggleBtnState}>
            <img src={btnState === 'list' ? ByAlbumOff : ByAlbumOn} alt='사용자 게시물 사진 앨범형으로 보기 버튼' />
          </button>
        </ByAlbumWrapper>
      </GetPostWrapper>
      {btnState === 'list' ? (
        res.map(el => {
          return (
            <PostCard
              accountname={el.author.accountname}
              username={el.author.username}
              image={el.author.image}
              postContent={el.content}
              postImg={el.image}
              uploadDate={el.updatedAt}
              postid={el.id}
              key={crypto.randomUUID()}
              commentCount={el.commentCount}
              deletePostHandler={deletePostHandler}
            />
          );
        })
      ) : (
        <AlbumWrapper>
          {res
            .filter(el => el.image)
            .map(el => (
              <PostAlbum postImg={el.image} postid={el.id} key={crypto.randomUUID()} />
            ))}
        </AlbumWrapper>
      )}
    </>
  );
}
