import React from 'react';
import ReactDOM from 'react-dom';
import { AlertWrapper, AlertBtnStyle, AlertTit, BackgroundBlur } from './Alert.style';

export default function Alert({ alertMSG, rightMSG = '', rightFunc, stateFunc }) {
  const modal = document.getElementById('modal-root');

  const cancelFunc = e => {
    e.stopPropagation();
    stateFunc(prev => !prev);
  };

  const bgClickHandler = e => {
    e.stopPropagation();
    stateFunc(prev => !prev);
  };

  return ReactDOM.createPortal(
    <BackgroundBlur onClick={bgClickHandler}>
      <AlertWrapper>
        <AlertTit>{alertMSG}</AlertTit>
        {!rightMSG ? (
          <AlertBtnStyle one={true} onClick={cancelFunc}>
            확인
          </AlertBtnStyle>
        ) : (
          <>
            {' '}
            <AlertBtnStyle onClick={cancelFunc}>취소</AlertBtnStyle>
            <AlertBtnStyle className='actBtn' onClick={rightFunc}>
              {rightMSG}
            </AlertBtnStyle>
          </>
        )}
      </AlertWrapper>
    </BackgroundBlur>,
    modal
  );
}
