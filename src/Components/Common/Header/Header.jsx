import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HeaderWrapper, Div } from './Header.style';
import iconBack from '../../../Assets/Icons/icon_arrow_left.png';
import iconMore from '../../../Assets/Icons/icon_more_vertical.png';
import iconSearch from '../../../Assets/Icons/icon_search.png';
import SearchBar from '../../../Pages/Main/Search/SearchBar';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Alert from '../Alert/Alert';

export default function Header() {
  const [isModal, setIsModal] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onClickHandler = () => {
    setIsModal(true);
  };

  const setHeaderOption = name => {
    switch (name) {
      case '/home':
        return (
          <button>
            <img src={iconSearch} alt='검색페이지로 이동하기 버튼' />
          </button>
        );
      case '/post/upload':
      case '/product':
        return false;
      case '/search':
        return <SearchBar />;
      default:
        return (
          <button onClick={onClickHandler}>
            <img src={iconMore} alt='모달창 띄우는 버튼' onClick={onClickHandler} />
          </button>
        );
    }
  };

  const alertOpen = () => {
    setIsAlert(true);
  };

  const logout = () => {
    localStorage.removeItem('Access Token');
    localStorage.removeItem('user ID');
    navigate('/');
  };

  const listObj = [
    {
      name: '설정 및 개인정보',
      func: () => navigate('/profile/:accountname/edit'),
    },
    {
      name: '로그아웃',
      func: () => alertOpen(),
    },
  ];

  return (
    <>
      <HeaderWrapper>
        <Div id='globalHeader'>
          {pathname === '/home' ? (
            <h2>레시픽 피드</h2>
          ) : (
            <button
              onClick={() => {
                navigate(-1);
              }}
            >
              <img src={iconBack} alt='뒤로가기 버튼' />
            </button>
          )}
          {setHeaderOption(pathname)}
        </Div>
      </HeaderWrapper>
      {isModal && <Modal listObj={listObj} stateFunc={setIsModal} />}
      {isAlert && (
        <Alert alertMSG='로그아웃 하시겠어요?' rightMSG='로그아웃' stateFunc={setIsAlert} rightFunc={logout} />
      )}
    </>
  );
}
