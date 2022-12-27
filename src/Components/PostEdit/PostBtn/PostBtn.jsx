import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './../../Common/Button/Button';

export default function PostBtnPortal({ textValue, response }) {
  const [isRendered, setRendered] = useState(false);
  const [isValid, setValid] = useState();

  useEffect(() => {
    setRendered(true);
  }, []);

  useEffect(() => {
    if (!textValue && response.length === 0) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [textValue, response.length]);

  const headerInner = document.querySelector('#globalHeader');

  return isRendered
    ? ReactDOM.createPortal(<Button className='mediumSmall' content='저장' disabled={isValid} />, headerInner)
    : null;
}
