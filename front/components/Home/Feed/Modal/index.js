import React, { useCallback, useRef } from "react";
import { Modal, Avatar, message } from "antd";
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
  setImagePaths,
}) => {
  const imageInput = useRef();

  const [post, onChangePost, setPost] = useInput("");

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!post || !post.trim()) {
        return message.error("게시글을 작성해주세요", 2.5);
      }

      if (imagePaths.length > 0) {
        const formData = new FormData();

        imagePaths.forEach((i) => {
          formData.append("image", i);
        });

        formData.append("content", post);

        axios
          .post(`${SERVER}/post`, formData, { withCredentials: true })
          .then(() => {
            setPost("");
            setImagePaths([]);
            onToggleOpenModal();
            message.success("게시글 작성이 완료되었습니다.", 2.5);
          })
          .catch((err) => console.error(err));
      } else {
        axios
          .post(`${SERVER}/post`, { content: post }, { withCredentials: true })
          .then(() => {
            setPost("");
            onToggleOpenModal();
            message.success("게시글 작성이 완료되었습니다.", 2.5);
          })
          .catch((err) => console.error(err));
      }
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
      afterClose={() => setImagePaths([])}
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
  onChangeImages: PropTypes.func.isRequired,
  imagePaths: PropTypes.array.isRequired,
  setImagePaths: PropTypes.func.isRequired,
};

export default CustomModal;
