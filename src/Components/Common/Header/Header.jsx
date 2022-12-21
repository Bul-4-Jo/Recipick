import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { HeaderWrapper, Div } from './Header.style';
import iconBack from '../../../Assets/Icons/icon_arrow_left.png';
import iconMore from '../../../Assets/Icons/icon_more_vertical.png';
import iconSearch from '../../../Assets/Icons/icon_search.png';
import SearchBar from '../../../Pages/Main/Search/SearchBar';
import Button from '../Button/Button';

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const setHeaderOption = name => {
    switch (name) {
      case '/main':
        return (
          <button>
            <img src={iconSearch} alt='검색페이지로 이동하기 버튼' />
          </button>
        );
      case '/post/upload':
        return <Button className='mediumSmall' disabled={true} content='저장' />;
      case '/search':
        return <SearchBar />;
      default:
        return (
          <button>
            <img src={iconMore} alt='더 많은 옵션보기 버튼' />
          </button>
        );
    }
  };

  return (
    <>
      <HeaderWrapper>
        <Div>
          {pathname === '/main' ? (
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
    </>
  );
}
