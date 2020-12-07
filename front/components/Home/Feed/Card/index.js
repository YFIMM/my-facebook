import React from "react";
import { Avatar } from "antd";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
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

dayjs.locale("ko");
dayjs.extend(relativeTime);

const Card = ({ content, name, images, createdAt }) => {
  return (
    <CardWrapper>
      <ProfileContainer>
        <Avatar size={40} icon={<UserOutlined />} />
        <UsernameContainer>
          <span style={{ fontSize: "15px", fontWeight: 600, height: "20px" }}>
            {name}
          </span>
          <span style={{ fontSize: "13px", height: "18px" }}>
            {dayjs(createdAt).fromNow()}
          </span>
        </UsernameContainer>
      </ProfileContainer>
      <Content
        lines={4}
        more="더 보기"
        less={() => {
          return;
        }}
      >
        {content}
      </Content>
      {images.length > 0 && <Img images={images} />}
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

Card.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.array,
  createdAt: PropTypes.string.isRequired,
};

export default Card;
