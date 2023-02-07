import React, { useState, useEffect, useContext } from 'react';
import ChatItem from './ChatItem/ChatItem';
import { getFollowingList, getFollowerList } from '../../../../API/api';
import { ChatingWrapper, ChatListWrapper } from './ChatList.style';
import { ThemeContext } from '../../../../Style/ThemeProvider';
import BtnDarkMode from '../../../../Components/Common/BtnDarkMode/BtnDarkMode';

export default function ChatList() {
  const { theme, themeHandler } = useContext(ThemeContext);
  const [friends, setFriends] = useState([]);
  const [followList, setFollowList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const userId = localStorage.getItem('user ID');

  useEffect(() => {
    getFollowingList(userId).then(response => {
      setFollowList(prev => response);
    });
    getFollowerList(userId).then(response => setFollowingList(prev => response));
  }, []);
  useEffect(() => {
    setFriends(prev => [...followList, ...followingList]);
  }, [followList, followingList]);

  const userChatMember = friends.filter((one, i) => {
    return (
      friends &&
      friends.findIndex(two => {
        return one.accountname === two.accountname;
      }) === i
    );
  });

  return (
    <>
      <ChatingWrapper>
        <ChatListWrapper>
          {userChatMember &&
            userChatMember.map(member => (
              <ChatItem
                userId={member.accountname}
                userName={member.username}
                userImg={member.image}
                userState={Math.floor(Math.random() * 2)}
                key={crypto.randomUUID()}
              />
            ))}
        </ChatListWrapper>
        <BtnDarkMode themeState={theme} themeHandler={themeHandler} />
      </ChatingWrapper>
    </>
  );
}
