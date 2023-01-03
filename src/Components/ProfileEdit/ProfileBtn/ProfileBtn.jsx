import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './../../Common/Button/Button';

export default function ProfileBtnPortal({ validState }) {
  const [isRendered, setRendered] = useState(false);
  const [isValid, setValid] = useState();
  const { userNameError, userIdError } = validState;

  useEffect(() => {
    setRendered(true);
  }, []);

  useEffect(() => {
    if (!userIdError && !userNameError) {
      setValid(false);
    }
  }, [userIdError]);

  const headerInner = document.querySelector('#globalHeader');

  return isRendered
    ? ReactDOM.createPortal(
        <Button className='mediumSmall' content='저장' disabled={isValid} formName='profileContent' />,
        headerInner
      )
    : null;
}
