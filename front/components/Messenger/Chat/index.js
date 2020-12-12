import React from "react";

import OtherChat from "@components/Messenger/Chat/OtherChat";
import MyChat from "@components/Messenger/Chat/MyChat";

import {
  Wrapper,
  ChatContainer,
  ProfileContainer,
  ChatListContainer,
  ChatData,
  Span,
  UserChat,
} from "@components/Messenger/Chat/style";

const Chat = ({ username, userId }) => {
  return (
    <Wrapper>
      <ChatContainer>
        <ProfileContainer>{username}</ProfileContainer>
        <ChatListContainer>
          <OtherChat />
          <MyChat />
        </ChatListContainer>
      </ChatContainer>
    </Wrapper>
  );
};

export default Chat;
