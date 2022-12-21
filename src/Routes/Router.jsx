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
import Signup from '../Pages/Signup/Signup';

import Comment from '../Pages/Comment/Comment';
import { LayoutMain, LayoutIntro } from '../Components/Common/Layout/Layout';
import ProfileSet from '../Pages/Signup/Profile/ProfileSet';
import ProductEdit from '../Pages/Product/ProductEdit/ProductEdit';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutIntro />}>
          <Route path='/' element={<Splash />} />
          <Route path='/join' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/login/signup' element={<Signup />} />

          <Route path='/login/singup/profileset' element={<ProfileSet />} />
        </Route>

        <Route element={<LayoutMain />}>
          <Route path='/main' element={<HomeFeed />} />
          <Route path='/post/:id' element={<PostDetail />} />


        <Route path='/postid' element={<Comment />} />

          <Route path='/profile' element={<UserProfile />} />
          <Route path='/account/edit' element={<ProfileEdit />} />
          <Route path='/follow/follower' element={<Followers />} />
          <Route path='/follow/following' element={<Following />} />
          <Route path='/product' element={<ProductEdit />} />


          <Route path='/search' element={<Search />} />

          <Route path='/chat' element={<ChatList />} />
          <Route path='/chat/:id' element={<ChatRoom />} />

          <Route path='/post/upload' element={<PostEdit />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
