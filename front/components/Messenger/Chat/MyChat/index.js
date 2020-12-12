import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { ChatData, Span, UserChat } from "@components/Messenger/Chat/style";

const MyChat = () => {
  return (
    <ChatData>
      <UserChat style={{ justifyContent: "flex-end" }}>ㅎㅇ</UserChat>
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          width: "10%",
          justifyContent: "flex-end",
        }}
      >
        <Span style={{ overflow: "hidden" }}>강민석</Span>
        <Avatar icon={<UserOutlined />} />
      </div>
    </ChatData>
  );
};

export default MyChat;
