import React, { useState, useCallback, useEffect } from "react";
import { Button, message } from "antd";
import axios from "axios";
import useSWR from "swr";
import PropTypes from "prop-types";

import OtherChat from "@components/Messenger/Chat/OtherChat";
import MyChat from "@components/Messenger/Chat/MyChat";

import useInput from "@hooks/useInput";
import useSocket from "@hooks/useSocket";

import fetcher from "@utils/fetcher";

import { SERVER } from "env";

import {
  Wrapper,
  ChatContainer,
  ProfileContainer,
  ChatListContainer,
  SendContainer,
  Form,
  TextArea,
} from "@components/Messenger/Chat/style";

const Chat = ({ username, userId, userData }) => {
  const { data: chatData, mutate: mutateChat } = useSWR(
    `${SERVER}/messenger/${userId}`,
    fetcher
  );

  const [text, onChangeText, setText] = useInput("");

  const [socket, disconnectSocket] = useSocket();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!text || !text.trim()) {
        return message.error("메세지를 입력해주세요", 2.5);
      }

      axios
        .post(
          `${SERVER}/messenger/${userId}`,
          { content: text },
          { withCredentials: true }
        )
        .then(() => {
          setText("");
        })
        .catch((err) => console.error(err));
    },
    [text]
  );

  useEffect(() => {
    socket.on("message", (data) => {
      console.log(data);
    });

    return () => {
      socket.off("message");
    };
  }, [socket]);

  return (
    <Wrapper>
      <ChatContainer>
        <ProfileContainer>{username}</ProfileContainer>
        <ChatListContainer>
          {chatData &&
            chatData.map((v) => {
              if (v.Sender.id === userData.id) {
                return (
                  <MyChat key={v.id} name={v.Sender.name} content={v.content} />
                );
              } else {
                return (
                  <OtherChat
                    key={v.id}
                    name={v.Sender.name}
                    content={v.content}
                  />
                );
              }
            })}
        </ChatListContainer>
        <SendContainer>
          <div
            style={{
              width: "60%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Form onSubmit={onSubmit}>
              <TextArea
                placeholder="메세지를 입력해주세요..."
                value={text}
                onChange={onChangeText}
              />
              <Button
                type="primary"
                style={{ width: "10%", height: "90%", marginLeft: "4px" }}
                htmlType="submit"
              >
                입력
              </Button>
            </Form>
          </div>
        </SendContainer>
      </ChatContainer>
    </Wrapper>
  );
};

export default Chat;
