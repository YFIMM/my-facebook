import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { ChatData, Span, UserChat } from "@components/Messenger/Chat/style";

const OtherChat = ({ content, name }) => {
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
        <Span style={{ overflow: "hidden" }}>{name}</Span>
      </div>
      <UserChat>{content}</UserChat>
    </ChatData>
  );
};

export default OtherChat;
