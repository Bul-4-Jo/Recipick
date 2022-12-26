import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { ModalWrapper, ButtonItem, BackgroundBlur } from './Modal.style';

export default function Modal({ listObj }) {
  // list Obj 아래와 같은 형식으로 전달 받아 활용
  // const listObj = [
  //   {
  //     name: '삭제',
  //     func: () => console.log('삭제'),
  //   },
  //   {
  //     name: '수정',
  //     func: () => console.log('수정'),
  //   },
  //   {
  //     name: '웹사이트에서 상품 보기',
  //     func: () => console.log('상품 보기'),
  //   },
  // ];

  const { setIsModal } = useOutletContext();

  const bgClickHandler = () => {
    setIsModal(prev => !prev);
  };

  return (
    <>
      <BackgroundBlur onClick={bgClickHandler} />
      <ModalWrapper>
        {listObj.map(item => (
          <ButtonItem onClick={item.func}>{item.name}</ButtonItem>
        ))}
      </ModalWrapper>
    </>
  );
}
