import React, { useState, useCallback } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import Card from "@components/Home/Feed/Card";
import Modal from "@components/Home/Feed/Modal";

import {
  FeedWrapper,
  FeedContainer,
  PostBox,
  PostBtn,
  Divider,
} from "@components/Home/Feed/style";

const Feed = ({ username }) => {
  const [openModal, setOpenModal] = useState(false);

  const onToggleOpenModal = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);

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
            <PostBtn onClick={onToggleOpenModal}>
              {`${username}님, 무슨 생각을 하고 계신가요?`}
            </PostBtn>
          </div>
          <Modal
            openModal={openModal}
            onToggleOpenModal={onToggleOpenModal}
            username={username}
          />
          <Divider />
        </PostBox>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </FeedContainer>
    </FeedWrapper>
  );
};

Feed.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Feed;
