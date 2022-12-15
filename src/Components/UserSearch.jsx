import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../components/constants/baseUrl';
import TopMenuComponent from '../components/common/TopMenuComponent';
import { UserContext } from '../context/UserContext';
import UserList from '../components/search/UserList';
import '../pages/style/Search.css';

function UserSearch() {
  //   const { token } = useContext(UserContext);
  //   const [ searchUser, setSearchUser ] = useState([]);
  //   const [ keyword, setKeyword ] = useState('');
  //   useEffect(() => {
  //     if (keyword) {
  //       const handleGetUserInfo = async () => {
  //         try {
  //           const response = await axios.get(`${BASE_URL}/user/search/?keyword=${keyword}`, {
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //             },
  //           });
  //           console.log(response);
  //           setSearchUser(response.data);
  //         } catch (err) {
  //           console.error(err);
  //         }
  //       };
  //       handleGetUserInfo();
  //     }
  //   }, [ keyword ]);
  //   return (
  //     <>
  //       <h2 className='ir'>사용자 검색</h2>
  //       <TopMenuComponent
  //         topclassName='topSearchNav'
  //         rightclassName='unsettled'
  //         inputtype='text'
  //         onChange={e => {
  //           setKeyword(e.target.value);
  //         }}
  //       />
  //       <main className='searchMain'>
  //         <h3 className='ir'>검색어와 일치하는 사용자 목록</h3>
  //         {searchUser.map(user => {
  //           return (
  //             <UserList
  //               searchUser={searchUser}
  //               keyword={keyword}
  //               key={user._id}
  //               image={user.image}
  //               username={user.username}
  //               accountname={`@ ${user.accountname}`}
  //               alt={`${user.username}님의 프로필 사진`}
  //             />
  //           );
  //         })}
  //       </main>
  //     </>
  //   );
}
export default UserSearch;
