import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { ImUser } from "react-icons/im";
import { Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import axios from "axios";

import useInput from "@hooks/useInput";

import {
  Wrapper,
  FormContainer,
  CloseBtnContainer,
  CloseBtn,
  ProfileImgContainer,
  ProfileImg,
  Form,
  Error,
} from "@components/Auth/Modal/style";
import { Input, Button } from "@components/Auth/LogIn/style";

const ModalPage = ({ onChangeOpenModal, openModal }) => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const [logInError, setLogInError] = useState("");

  const onSubmitForm = useCallback(
    (e) => {
      setLogInError("");
      if (!password || !password.trim()) {
        setLogInError("비밀번호를 입력해주세요.");
        return;
      }
    },
    [email, password]
  );

  return (
    <Modal visible={openModal} footer={null} onCancel={onChangeOpenModal}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
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
