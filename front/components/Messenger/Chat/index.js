import React, {
  useState,
  useCallback,
  useEffect,
  createRef,
  useRef,
} from "react";
import { Button, message } from "antd";
import axios from "axios";
import useSWR, { useSWRInfinite } from "swr";
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

const PAGE_SIZE = 20;

const Chat = ({ username, userId, userData }) => {
  const { data: chatData, mutate: mutateChat, setSize } = useSWRInfinite(
    (i) => `${SERVER}/messenger/${userId}?perPage=${PAGE_SIZE}&page=${i + 1}`,
    fetcher
  );

  const scrollBarRef = useRef();

  const [text, onChangeText, setText] = useInput("");

  const [socket, disconnectSocket] = useSocket("online");

  const [chatSections, setChatSections] = useState([]);

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
            prev[0].push(response.data);

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

  // useEffect(() => {
  //   if (chatData) {
  //     setChatSections((prevData) => {
  //       prevData.concat(...chatData).reverse();

  //       return prevData;
  //     });
  //   }
  // }, [chatData]);

  // useEffect(() => {
  //   socket.on("message", (data) => {
  //     mutateChat((prev) => {
  //       prev[0].unshift(data);

  //       return prev;
  //     }, false);
  //   });
  // }, [socket]);

  useEffect(() => {
    const scroll =
      scrollBarRef.current.scrollHeight - scrollBarRef.current.clientHeight;
    scrollBarRef.current.scrollTo(0, scroll);
  }, [chatData]);

  const onScroll = useCallback((e) => {
    if (e.nativeEvent.srcElement.scrollTop === 0) {
      console.log("HI");
    }
  }, []);

  return (
    <Wrapper>
      <ChatContainer>
        <ProfileContainer>{username}</ProfileContainer>
        <ChatListContainer ref={scrollBarRef} onScroll={onScroll}>
          {chatData &&
            chatData[0].map((v, i) => {
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
