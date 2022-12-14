import React from 'react';
import { AlertWrapper, AlertBtnStyle, AlertTit } from './Alert.style';

export default function Alert({ alertMSG, cancelFunc, leftMSG, leftFunc }) {
  return (
    <AlertWrapper>
      <AlertTit>{alertMSG}</AlertTit>
      <AlertBtnStyle onClick={cancelFunc}>취소</AlertBtnStyle>
      <AlertBtnStyle className='actBtn' onClick={leftFunc}>
        {leftMSG}
      </AlertBtnStyle>
    </AlertWrapper>
  );
}
