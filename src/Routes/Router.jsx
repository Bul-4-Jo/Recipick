import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Splash from '../Pages/Splash/Splash';
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
import PostDetail from '../Pages/Post/PostDetail/PostDetail';
import Signup from '../Pages/Signup/Signup';

import { LayoutMain, LayoutIntro, LayOutJoin } from '../Components/Common/Layout/Layout';

import ProfileSet from '../Pages/Signup/Profile/ProfileSet';
import ProductEdit from '../Pages/Product/ProductEdit/ProductEdit';
import PostUpload from './../Pages/Post/PostUpload/PostUpload';
import ProductUpload from './../Pages/Product/ProductUpload/ProductUpload';
import NonAuthRoute from './NonAuthRoute';
import AuthRoute from './AuthRoute';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutIntro />}>
          <Route path='/' element={<Splash />} />
          <Route element={<NonAuthRoute />}>
            <Route path='/login' element={<Login />} />
          </Route>
        </Route>

        <Route element={<NonAuthRoute />}>
          <Route element={<LayOutJoin />}>
            <Route path='/join'>
              <Route index element={<Signup />} />
              <Route path='profile' element={<ProfileSet />} />
            </Route>
          </Route>
        </Route>

        <Route element={<AuthRoute />}>
          <Route element={<LayoutMain />}>
            <Route path='/home' element={<HomeFeed />} />

            <Route path='/postid' element={<PostDetail />} />

            <Route path='/profile/:accountName'>
              <Route index element={<UserProfile />} />
              <Route path='edit' element={<ProfileEdit />} />
              <Route path='followers' element={<Followers />} />
              <Route path='following' element={<Following />} />
            </Route>

            <Route path='/product' element={<ProductUpload />} />
            <Route path='/product/:productid' element={<ProductEdit />} />

            <Route path='/search' element={<Search />} />

            <Route path='/chat' element={<ChatList />} />
            <Route path='/chat/:accountname' element={<ChatRoom />} />

            <Route path='/post'>
              <Route path=':postid' element={<PostDetail />} />
              <Route path='upload' element={<PostUpload />} />
              <Route path=':postid/edit' element={<PostEdit />} />
            </Route>
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
