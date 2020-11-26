import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import Card from "@components/Feed/Card";

import {
  FeedWrapper,
  FeedContainer,
  PostBox,
  PostBtn,
  Divider,
} from "@components/Feed/style";

const Feed = () => {
  return (
    <FeedWrapper>
      <FeedContainer>
        <PostBox>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Avatar size={40} icon={<UserOutlined />} />
            <PostBtn>강민석님, 무슨 생각을 하고 계신가요?</PostBtn>
          </div>
          <Divider />
        </PostBox>
        <Card />
      </FeedContainer>
    </FeedWrapper>
  );
};

export default Feed;
