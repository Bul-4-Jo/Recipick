import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import PostDetail from '../Pages/PostDetail';
import {
  Splash,
  Login,
  ChatList,
  ChatRoom,
  HomeFeed,
  Followers,
  Following,
  ProfileEdit,
  UserProfile,
  Search,
  NotFound,
  PostEdit,
  Product,
  Signup,
} from './Pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={Splash} />
        <Route path='/auth/*' element={Outlet}>
          <Route path='/login' element={Login} />
          <Route path='/join' element={Signup} />
          <Route path='/profile' element={ProfileEdit} />
        </Route>
        <Route path='/main' element={HomeFeed} />
        <Route path='/post/*' element={Outlet}>
          <Route path=':id/' element={PostDetail} />
        </Route>
        <Route path='/profile/*' element={Outlet}>
          <Route path='' element={UserProfile} />
          <Route path='/account/edit' element={ProfileEdit} />
          <Route path='/follow/유저이름/follower' element={Followers} />
          <Route path='/follow/유저이름/following' element={Following} />
          <Route path='/product' element={Product} />
        </Route>
        <Route path='/search' element={Search} />
        <Route path='/Chat/*' element={Outlet}>
          <Route path='' element={ChatList} />
          <Route path=':id/' element={ChatRoom} />
        </Route>
        <Route path='/post/upload' element={PostEdit} />
        <Route path='/notfound' element={NotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
