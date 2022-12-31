import React, { useState, useEffect } from 'react';
import ChatItem from './ChatItem/ChatItem';
import { getFollowingList, getFollowerList } from '../../../../API/api';
import { ChatingWrapper, ChatListWrapper } from './ChatList.style';

export default function ChatList() {
  const [friends, setFriends] = useState([]);
  const [followList, setFollowList] = useState([]);
  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    getFollowingList().then(response => setFollowList(prev => response));
    getFollowerList().then(response => setFollowingList(prev => response));
  }, []);
  useEffect(() => {
    setFriends(prev => [...followList, ...followingList]);
  }, [followList, followingList]);

  const userChatMember = friends.filter((one, i) => {
    return (
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
      </ChatingWrapper>
    </>
  );
}
