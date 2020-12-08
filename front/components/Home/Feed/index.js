import React, { useState, useCallback } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import axios from "axios";

import Card from "@components/Home/Feed/Card";
import Modal from "@components/Home/Feed/Modal";

import { SERVER } from "env";

import {
  FeedWrapper,
  FeedContainer,
  PostBox,
  PostBtn,
  Divider,
} from "@components/Home/Feed/style";

const Feed = ({ username, posts, userData }) => {
  const [openModal, setOpenModal] = useState(false);
  const [imagePaths, setImagePaths] = useState([]);

  const onToggleOpenModal = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);

  const onChangeImages = useCallback(
    (e) => {
      const imageFormData = new FormData();

      [].forEach.call(e.target.files, (f) => {
        imageFormData.append("image", f);
      });

      axios
        .post(`${SERVER}/post/images`, imageFormData, { withCredentials: true })
        .then((response) => {
          setImagePaths(imagePaths.concat(response.data));
        })
        .catch((err) => console.error(err));
    },
    [imagePaths]
  );

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
            onChangeImages={onChangeImages}
            imagePaths={imagePaths}
            setImagePaths={setImagePaths}
          />
          <Divider />
        </PostBox>
        {posts.map((v, i) => (
          <Card
            key={v.id}
            content={v.content}
            name={v.User.name}
            images={v.Images}
            createdAt={v.createdAt}
            postId={v.id}
            userId={userData.id}
            likers={v.Likers}
            postUserId={v.UserId}
            followerList={v.User.Followers}
          />
        ))}
      </FeedContainer>
    </FeedWrapper>
  );
};

Feed.propTypes = {
  username: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  userData: PropTypes.object.isRequired,
};

export default Feed;
