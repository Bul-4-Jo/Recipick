import React from 'react';
import ReactDOM from 'react-dom';
import { ModalWrapper, ButtonItem, BackgroundBlur } from './Modal.style';

export default function Modal({ listObj, stateFunc }) {
  const modal = document.getElementById('modal-root');

  const bgClickHandler = e => {
    e.stopPropagation();
    stateFunc(prev => !prev);
  };

  return ReactDOM.createPortal(
    <BackgroundBlur onClick={bgClickHandler}>
      <ModalWrapper>
        {listObj &&
          listObj.map(item => (
            <ButtonItem onClick={item.func} key={crypto.randomUUID()}>
              {item.name}
            </ButtonItem>
          ))}
      </ModalWrapper>
    </BackgroundBlur>,
    modal
  );
}
