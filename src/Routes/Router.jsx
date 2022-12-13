import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import pagesExport from './'
// import {
//   Splash,
//   Login,
//   ChatList,
//   ChatRoom,
//   HomeFeed,
//   Followers,
//   Following,
//   ProfileEdit,
//   UserProfile,
//   Search,
//   NotFound,
//   PostEdit,
//   Product,
//   Signup,
// } from './';

import Splash from '../Pages/Splash';
import Login from '../Pages/Login/Login';
import ChatList from '../Pages/Main/Chat/ChatList/ChatList';
import ChatRoom from '../Pages/Main/Chat/ChatRoom/ChatRoom';
import HomeFeed from '../Pages/Main/HomeFeed/HomeFeed';
import Followers from '../Pages/Main/Profile/Followers/Followers';
import Following from '../Pages/Main/Profile/Following/Following';
import ProfileEdit from '../Pages/Main/Profile/ProfileEdit/ProfileEdit';
import UserProfile from '../Pages/Main/Profile/UserProfile/UserProfile';
import Search from '../Pages/Main/Search/Search';
import NotFound from '../Pages/NotFound/NotFound';
import PostEdit from '../Pages/Post/PostEdit/PostEdit';
import PostDetail from '../Pages/PostDetail';
import Product from '../Pages/Product/Product';
import Signup from '../Pages/Signup/Signup';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/join' element={<Signup />} />
        <Route path='/login' element={<Login />} />

        <Route path='/profileedit' element={ProfileEdit} />

        <Route path='/main' element={<HomeFeed />} />

        <Route path='/postid' element={<PostDetail />} />

        <Route path='/profile' element={<UserProfile />} />
        <Route path='/account/edit' element={<ProfileEdit />} />
        <Route path='/follow/follower' element={<Followers />} />
        <Route path='/follow/following' element={<Following />} />
        <Route path='/product' element={<Product />} />

        <Route path='/search' element={<Search />} />

        <Route path='/chat' element={<ChatList />} />
        <Route path=':id/' element={<ChatRoom />} />

        <Route path='/post/upload' element={<PostEdit />} />
        <Route path='/notfound' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
