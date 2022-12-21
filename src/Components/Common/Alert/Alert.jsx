import React from 'react';
import { AlertWrapper, AlertBtnStyle, AlertTit } from './Alert.style';

export default function Alert({ alertMSG, cancelFunc, rightMSG, rightFunc }) {
  return (
    <AlertWrapper>
      <AlertTit>{alertMSG}</AlertTit>
      <AlertBtnStyle onClick={cancelFunc}>취소</AlertBtnStyle>
      <AlertBtnStyle className='actBtn' onClick={rightFunc}>
        {rightMSG}
      </AlertBtnStyle>
    </AlertWrapper>
  );
}
