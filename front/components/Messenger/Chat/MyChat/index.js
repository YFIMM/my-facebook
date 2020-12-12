import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { ChatData, Span, UserChat } from "@components/Messenger/Chat/style";

const MyChat = ({ content, name }) => {
  return (
    <ChatData>
      <UserChat style={{ justifyContent: "flex-end" }}>{content}</UserChat>
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          width: "10%",
          justifyContent: "flex-end",
        }}
      >
        <Span style={{ overflow: "hidden" }}>{name}</Span>
        <Avatar icon={<UserOutlined />} />
      </div>
    </ChatData>
  );
};

export default MyChat;
