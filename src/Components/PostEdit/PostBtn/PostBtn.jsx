import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './../../Common/Button/Button';

export default function PostBtnPortal({ isValid }) {
  const [isRendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  const headerInner = document.querySelector('#globalHeader');

  return isRendered
    ? ReactDOM.createPortal(
        <Button className='mediumSmall' content='저장' disabled={isValid} formName='postContent' />,
        headerInner
      )
    : null;
}
