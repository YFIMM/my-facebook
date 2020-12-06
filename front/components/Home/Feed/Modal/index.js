import React, { useCallback, useRef, useEffect, useState } from "react";
import { Modal, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import axios from "axios";

import useInput from "@hooks/useInput";

import Img from "@components/Home/Feed/Modal/Img";

import { SERVER } from "env";

import {
  BodyWrapper,
  AvatarContainer,
  Span,
  Button,
  Textarea,
  IconContainer,
  FontBox,
  IconBox,
  ImageIcon,
  Form,
} from "@components/Home/Feed/Modal/style";

const CustomModal = ({
  openModal,
  onToggleOpenModal,
  username,
  onChangeImages,
  imagePaths,
}) => {
  const imageInput = useRef();

  const [post, onChangePost, setPost] = useInput("");

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(imagePaths.length);
    },
    [post, imagePaths]
  );

  return (
    <Modal
      title="게시글 만들기"
      visible={openModal}
      footer={null}
      onCancel={onToggleOpenModal}
      bodyStyle={{
        padding: "0px 24px",
        height: imagePaths.length > 0 ? "560px" : "330px",
        overflowY: "auto",
      }}
      destroyOnClose={true}
      preserve={false}
    >
      <BodyWrapper height={imagePaths.length > 0 ? "560px" : "330px"}>
        <AvatarContainer>
          <Avatar size={40} icon={<UserOutlined />} />
          <Span>{username}</Span>
        </AvatarContainer>
        <Form onSubmit={onSubmit} encType="multipart/form-data">
          <Textarea
            placeholder={`${username}님, 무슨 생각을 하고 계신가요?`}
            value={post}
            onChange={onChangePost}
          />
          {imagePaths.length > 0 && <Img imagePaths={imagePaths} />}
          <input
            type="file"
            name="image"
            hidden
            multiple
            ref={imageInput}
            onChange={onChangeImages}
          />
          <IconContainer>
            <FontBox>게시물에 추가</FontBox>
            <IconBox>
              <ImageIcon onClick={onClickImageUpload} />
            </IconBox>
          </IconContainer>
          <Button type="submit">게시</Button>
        </Form>
      </BodyWrapper>
    </Modal>
  );
};

CustomModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  onToggleOpenModal: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

export default CustomModal;
