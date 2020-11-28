import React from "react";
import PropTypes from "prop-types";

import {
  Wrapper,
  LogInContainer,
  Form,
  Input,
  Button,
  Divider,
  GoToBtn,
} from "@components/Auth/LogIn/style";

const SignUp = ({ onChangeGoToSignUp }) => {
  return (
    <Wrapper>
      <LogInContainer>
        <Form>
          <Input type="email" placeholder="이메일" />
          <Input type="password" placeholder="비밀번호" />
          <Input type="password" placeholder="비밀번호 확인" />
          <Button>회원가입</Button>
          <Divider />
          <GoToBtn onClick={onChangeGoToSignUp}>로그인 하러가기</GoToBtn>
        </Form>
      </LogInContainer>
    </Wrapper>
  );
};

SignUp.propTypes = {
  onChangeGoToSignUp: PropTypes.func.isRequired,
};

export default SignUp;
