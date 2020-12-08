import React, { useCallback } from "react";
import { Avatar, message } from "antd";
import PropTypes from "prop-types";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { UserOutlined, LikeOutlined } from "@ant-design/icons";

import Img from "@components/Home/Feed/Card/Img";

import { SERVER } from "env";

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

const Card = ({ content, name, images, createdAt, postId, userId, likers }) => {
  const liked = likers.find((v) => v.id === userId);

  const onLike = useCallback(() => {
    axios
      .patch(`${SERVER}/post/${postId}/like`, {}, { withCredentials: true })
      .catch((err) => message.error(err, 2.5));
  }, []);

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
        <LikeContainer
          onClick={onLike}
          style={{
            color: liked ? "rgb(32, 120, 244)" : "#e4e6eb",
          }}
        >
          <LikeOutlined style={{ fontSize: "1.3rem", color: "inherit" }} />
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
  postId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  likers: PropTypes.array.isRequired,
};

export default Card;
