import React from 'react';
import { PostEditWrapper } from './PostEdit.style';
import PostForm from '../../../Components/PostEdit/PostForm/PostForm';
import ProfileThumb from '../../../Components/Common/ProfileThumb/ProfileThumb';

export default function PostEdit() {
  const PostTest = {
    id: '63a95c8917ae66658126ef6f',
    content:
      '{"textValue":"로렘 입숨은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트입니다. ","tagList":["재료1","재료2"]}',
    image: '1672043657588.jpg,1672043657590.png',
  };

  return (
    <>
      <PostEditWrapper>
        <h2 className='screen-out'>레시피 작성</h2>
        <ProfileThumb size='medium' />
        <PostForm postDetail={PostTest} />
      </PostEditWrapper>
    </>
  );
}
