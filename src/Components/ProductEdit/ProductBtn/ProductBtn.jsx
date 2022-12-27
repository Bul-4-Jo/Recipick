import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './../../Common/Button/Button';

export default function ProductBtnPortal({ inputValue, response }) {
  const [isRendered, setRendered] = useState(false);
  const [isValid, setValid] = useState();

  useEffect(() => {
    setRendered(true);
  }, []);

  useEffect(() => {
    const { iptPrdLink, iptPrdName, iptPrdPrice } = inputValue;

    if (iptPrdLink && iptPrdName && iptPrdPrice && response.length !== 0) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [inputValue, response.length]);

  const headerInner = document.querySelector('#globalHeader');

  return isRendered
    ? ReactDOM.createPortal(<Button className='mediumSmall' content='저장' disabled={isValid} />, headerInner)
    : null;
}
