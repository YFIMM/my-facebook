import React, { useCallback, useState } from "react";
import { Avatar, message, Dropdown, Menu } from "antd";
import PropTypes from "prop-types";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import {
  UserOutlined,
  LikeOutlined,
  EllipsisOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

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
  EllipsisContainer,
} from "@components/Home/Feed/Card/style";

dayjs.locale("ko");
dayjs.extend(relativeTime);

const Card = ({ content, name, images, createdAt, postId, userId, likers }) => {
  const [like, setLike] = useState(
    likers.find((v) => v.id === userId) ? true : false
  );

  const onLike = useCallback(() => {
    if (!like) {
      axios
        .patch(`${SERVER}/post/${postId}/like`, {}, { withCredentials: true })
        .then(() => setLike((prev) => !prev))
        .catch((err) => message.error(err, 2.5));
    } else {
      axios
        .delete(`${SERVER}/post/${postId}/like`, { withCredentials: true })
        .then(() => setLike((prev) => !prev))
        .catch((err) => console.error(err));
    }
  }, [like]);

  const onClickMenu = useCallback(({ key }) => {
    if (key === "logout") {
    }
  }, []);

  const menu = (
    <Menu onClick={onClickMenu}>
      <Menu.Item
        key="follow"
        icon={
          <UserAddOutlined style={{ fontSize: "18px", color: "#2d88ff" }} />
        }
        style={{ color: "#2d88ff", width: "180px" }}
      >
        팔로잉 하기
      </Menu.Item>
    </Menu>
  );

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
        <EllipsisContainer>
          <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
            <EllipsisOutlined />
          </Dropdown>
        </EllipsisContainer>
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
            color: like ? "rgb(32, 120, 244)" : "#e4e6eb",
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
