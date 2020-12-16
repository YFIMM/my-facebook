import React, { useCallback, useEffect, useRef } from "react";
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

  const scrollBarRef = useRef();

  const [text, onChangeText, setText] = useInput("");

  const [socket, disconnectSocket] = useSocket("online");

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
        .then((response) => {
          setText("");

          mutateChat((prev) => {
            prev.push(response.data);

            return prev;
          }).then(() => {
            const scroll =
              scrollBarRef.current.scrollHeight -
              scrollBarRef.current.clientHeight;
            scrollBarRef.current.scrollTo(0, scroll);
          });
        })
        .catch((err) => console.error(err));
    },
    [text, scrollBarRef]
  );

  useEffect(() => {
    socket.on("message", (data) => {
      mutateChat((prev) => {
        prev.push(data);

        return prev;
      }, false);
    });

    return () => {
      socket.off("message");
    };
  }, [socket]);

  useEffect(() => {
    const scroll =
      scrollBarRef.current.scrollHeight - scrollBarRef.current.clientHeight;
    scrollBarRef.current.scrollTo(0, scroll);
  }, [chatData]);

  return (
    <Wrapper>
      <ChatContainer>
        <ProfileContainer>{username}</ProfileContainer>
        <ChatListContainer ref={scrollBarRef}>
          {chatData &&
            chatData.map((v, i) => {
              if (v.Sender.id === userData.id) {
                return (
                  <MyChat
                    key={`${v.id}/${i}`}
                    name={v.Sender.name}
                    content={v.content}
                  />
                );
              } else {
                return (
                  <OtherChat
                    key={`${v.id}/${i}`}
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
