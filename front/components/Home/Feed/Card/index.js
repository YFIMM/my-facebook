import React from "react";
import { Avatar } from "antd";
import { UserOutlined, LikeOutlined } from "@ant-design/icons";

import Img from "@components/Home/Feed/Card/Img";

import {
  CardWrapper,
  ProfileContainer,
  UsernameContainer,
  Content,
  BtnContainer,
  Divider,
  LikeContainer,
} from "@components/Home/Feed/Card/style";

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
        안녕하세요
      </Content>
      <Img />
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
