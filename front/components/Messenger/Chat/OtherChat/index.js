import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { ChatData, Span, UserChat } from "@components/Messenger/Chat/style";

const ChatList = () => {
  return (
    <ChatData>
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          width: "10%",
        }}
      >
        <Avatar icon={<UserOutlined />} />
        <Span style={{ overflow: "hidden" }}>강민석</Span>
      </div>
      <UserChat>ㅎㅇ</UserChat>
    </ChatData>
  );
};

export default ChatList;
