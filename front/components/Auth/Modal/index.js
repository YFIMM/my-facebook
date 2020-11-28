import React from "react";
import PropTypes from "prop-types";
import { ImUser } from "react-icons/im";
import { CloseOutlined } from "@ant-design/icons";

import {
  Wrapper,
  FormContainer,
  CloseBtnContainer,
  CloseBtn,
  ProfileImgContainer,
  ProfileImg,
  Form,
} from "@components/Auth/Modal/style";
import { Input, Button } from "@components/Auth/LogIn/style";

const Modal = ({ onChangeOpenModal }) => {
  return (
    <Wrapper>
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
        <Form>
          <Input type="email" placeholder="이메일" />
          <Input type="password" placeholder="비밀번호" />
          <Button>로그인</Button>
        </Form>
      </FormContainer>
    </Wrapper>
  );
};

Modal.propTypes = {
  onChangeOpenModal: PropTypes.func.isRequired,
};

export default Modal;
