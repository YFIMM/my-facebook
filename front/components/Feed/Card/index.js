import React from "react";
import { Avatar } from "antd";
import { UserOutlined, LikeOutlined } from "@ant-design/icons";

import {
  CardWrapper,
  ProfileContainer,
  UsernameContainer,
  Content,
  ImgContainer,
  BtnContainer,
  Divider,
  LikeContainer,
} from "@components/Feed/Card/style";

const Card = () => {
  return (
    <CardWrapper>
      <ProfileContainer>
        <Avatar size={40} icon={<UserOutlined />} />
        <UsernameContainer>
          <span style={{ fontSize: "15px", fontWeight: 600, height: "20px" }}>
            강민석
          </span>
          <span style={{ fontSize: "13px", height: "18px" }}>1분</span>
        </UsernameContainer>
      </ProfileContainer>
      <Content
        lines={4}
        more="더 보기"
        less={() => {
          return;
        }}
      >
        Lorem ipsum dolor sit amet, consectetur
        <a
          href="https://www.yahoo.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          yahoo.com
        </a>
        adipiscing elit, sed do eiusmod tempor incididunt
        <a
          href="https://www.google.bg/"
          title="Google"
          rel="nofollow"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.google.bg
        </a>
        ut labore et dolore magna amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation
      </Content>
      <ImgContainer></ImgContainer>
      <Divider />
      <BtnContainer>
        <LikeContainer>
          <LikeOutlined
            style={{ fontSize: "1.3rem", color: "rgb(32, 120, 244)" }}
          />
          <span>좋아요</span>
        </LikeContainer>
      </BtnContainer>
    </CardWrapper>
  );
};

export default Card;
