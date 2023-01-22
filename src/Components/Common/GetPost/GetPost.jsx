import React, { useCallback, useEffect, useRef, useState } from 'react';
import { GetPostWrapper, ByAlbumWrapper, ByListWrapper, AlbumWrapper } from './GetPost.style';
import PostCard from '../../../Components/Common/PostCard/PostCard';
import ByAlbumOn from '../../../Assets/Icons/icon_post_album_on.png';
import ByAlbumOff from '../../../Assets/Icons/icon_post_album_off.png';
import ByListOn from '../../../Assets/Icons/icon_post_list_on.png';
import ByListOff from '../../../Assets/Icons/icon_post_list_off.png';
import { getPost, deletePost } from './../../../API/api';
import PostAlbum from './../../../Components/Common/PostAlbum/PostAlbum';

export default function GetPost({ userId, profileRef }) {
  const [btnState, setBtnState] = useState('list');
  const [res, setRes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const skip = useRef(0);
  const observerRef = useRef();
  const observerTargetRef = useRef();

  function toggleBtnState() {
    btnState === 'list' ? setBtnState('album') : setBtnState('list');
  }

  const deletePostHandler = useCallback(
    id => {
      deletePost(id);
      setRes(prev => prev.filter(post => post.id !== id));
    },
    [isLoading]
  );

  const observerHandler = (entries, id) => {
    if (entries.isIntersecting) {
      getPosts(id);
    }
  };

  const getPosts = useCallback(
    async (id, limit) => {
      const { post } = await getPost(id, skip.current, limit);

      if (post.length < 5 && observerTargetRef.current) {
        observerRef.current.unobserve(observerTargetRef.current);
        observerTargetRef.current = null;
      }

      setRes(prev => [...prev, ...post]);
      setIsLoading(false);
      skip.current += 5;
    },
    [skip.current, btnState]
  );

  useEffect(() => {
    if (observerTargetRef.current && userId) {
      observerRef.current = new IntersectionObserver(([entries]) => observerHandler(entries, userId), {
        root: profileRef.current,
        rootMargin: '10px 0px 10px',
      });
      observerRef.current.observe(observerTargetRef.current);
    }

    return () => observerRef.current && observerRef.current.disconnect();
  }, [observerTargetRef.current, userId]);

  useEffect(() => {
    if (observerTargetRef.current && userId) {
      getPosts(userId, 'infinite');
      observerRef.current.unobserve(observerTargetRef.current);
      observerTargetRef.current = null;
    }
  }, [btnState]);

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
      {!isLoading && res.length && btnState === 'list' ? (
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
              key={el.id}
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
      <div ref={observerTargetRef} />
    </>
  );
}
