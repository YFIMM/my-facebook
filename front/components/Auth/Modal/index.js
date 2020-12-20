import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { ImUser } from "react-icons/im";
import { Modal, message } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import axios from "axios";
import Router from "next/router";

import { SERVER } from "env";

import {
  FormContainer,
  CloseBtnContainer,
  CloseBtn,
  ProfileImgContainer,
  ProfileImg,
  AntdForm,
  AntdInput,
  AntdFormItem,
  AntdButton,
} from "@components/Auth/Modal/style";

const ModalPage = ({
  onChangeOpenModal,
  openModal,
  username,
  profileImgUrl,
  email,
}) => {
  const onSubmitForm = useCallback((e) => {
    const { email, password } = e;
    axios
      .post(
        `${SERVER}/auth/login`,
        { email, password },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        message.success(`안녕하세요 ${res.data.exUser.name}님`);
        Router.replace("/");
      })
      .catch((err) => message.error(err.response));
  }, []);

  return (
    <Modal
      preserve={false}
      visible={openModal}
      footer={null}
      onCancel={onChangeOpenModal}
      destroyOnClose={true}
      centered={true}
      bodyStyle={{ borderRadius: "10px", height: "500px" }}
      closeIcon={() => {
        return;
      }}
    >
      <FormContainer>
        <CloseBtnContainer>
          <CloseBtn
            onClick={onChangeOpenModal}
            icon={<CloseOutlined style={{ color: "black" }} />}
          />
        </CloseBtnContainer>
        <ProfileImgContainer>
          {profileImgUrl ? (
            <ProfileImg
              size={140}
              src={`http://localhost:5003/${profileImgUrl}`}
            />
          ) : (
            <ProfileImg
              size={140}
              icon={<ImUser style={{ fontSize: "100px" }} />}
            />
          )}
          <span>{username}</span>
        </ProfileImgContainer>
        <AntdForm onFinish={onSubmitForm} initialValues={{ email }}>
          <AntdFormItem
            name="email"
            rules={[{ required: true, message: "이메일을 입력해주세요." }]}
          >
            <AntdInput type="email" disabled />
          </AntdFormItem>
          <AntdFormItem
            name="password"
            rules={[{ required: true, message: "비밀번호를 입력해주세요." }]}
          >
            <AntdInput type="password" placeholder="비밀번호" />
          </AntdFormItem>
          <AntdFormItem>
            <AntdButton htmlType="submit">로그인</AntdButton>
          </AntdFormItem>
        </AntdForm>
      </FormContainer>
    </Modal>
  );
};

ModalPage.propTypes = {
  onChangeOpenModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  profileImgUrl: PropTypes.string,
  email: PropTypes.string.isRequired,
};

export default ModalPage;
