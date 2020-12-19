import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { ImUser } from "react-icons/im";
import { Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import axios from "axios";

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
}) => {
  const [logInError, setLogInError] = useState("");

  const onSubmitForm = useCallback((e) => {
    console.log("HI", e);
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
        <AntdForm onFinish={onSubmitForm}>
          <AntdFormItem
            name="email"
            rules={[{ required: true, message: "이메일을 입력해주세요." }]}
          >
            <AntdInput type="email" placeholder="이메일" />
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
};

export default ModalPage;
