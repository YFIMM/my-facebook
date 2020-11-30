import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { ImUser } from "react-icons/im";
import { Modal, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import axios from "axios";

import {
  Wrapper,
  FormContainer,
  CloseBtnContainer,
  CloseBtn,
  ProfileImgContainer,
  ProfileImg,
  AntdForm,
  AntdInput,
  AntdFormItem,
  Error,
  AntdButton,
} from "@components/Auth/Modal/style";
import { Input } from "@components/Auth/LogIn/style";

const ModalPage = ({ onChangeOpenModal, openModal }) => {
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
          <ProfileImg
            size={140}
            icon={<ImUser style={{ fontSize: "100px" }} />}
          />
          <span>강민석</span>
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
    // <Wrapper>
    //   <FormContainer>
    //     <CloseBtnContainer>
    //       <CloseBtn
    //         onClick={onChangeOpenModal}
    //         icon={<CloseOutlined style={{ color: "black" }} />}
    //       />
    //     </CloseBtnContainer>
    //     <ProfileImgContainer>
    //       <ProfileImg
    //         size={140}
    //         icon={<ImUser style={{ fontSize: "100px" }} />}
    //       />
    //       <span>강민석</span>
    //     </ProfileImgContainer>
    //     <Form>
    //       <Input
    //         type="email"
    //         placeholder="이메일"
    //         value={email}
    //         onChange={onChangeEmail}
    //       />
    //       <Input
    //         type="password"
    //         placeholder="비밀번호"
    //         value={password}
    //         onChange={onChangePassword}
    //       />
    //       {logInError && <Error>비밀번호를 입력해주세요.</Error>}
    //       <Button onClick={onSubmitForm}>로그인</Button>
    //     </Form>
    //   </FormContainer>
    // </Wrapper>
  );
};

ModalPage.propTypes = {
  onChangeOpenModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
};

export default ModalPage;