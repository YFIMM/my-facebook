import React, { useCallback, useRef } from "react";
import { Modal, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import useInput from "@hooks/useInput";

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

const CustomModal = ({ openModal, onToggleOpenModal, username }) => {
  const imageInput = useRef();

  const [imagePaths, onChangImagePaths] = useInput([]);
  const [post, onChangePost] = useInput("");

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(post);
    },
    [post]
  );

  return (
    <Modal
      title="게시글 만들기"
      visible={openModal}
      footer={null}
      onCancel={onToggleOpenModal}
      bodyStyle={{ padding: "0px 24px", maxHeight: "550px", height: "368px;" }}
    >
      <BodyWrapper>
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
          <input type="file" name="image" hidden multiple ref={imageInput} />
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
