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

const LogIn = ({ onChangeGoToSignUp }) => {
  return (
    <Wrapper>
      <LogInContainer>
        <Form>
          <Input type="email" placeholder="이메일" />
          <Input type="password" placeholder="비밀번호" />
          <Button>로그인</Button>
          <Divider />
          <GoToBtn onClick={onChangeGoToSignUp}>새 계정 만들기</GoToBtn>
        </Form>
      </LogInContainer>
    </Wrapper>
  );
};

LogIn.propTypes = {
  onChangeGoToSignUp: PropTypes.func.isRequired,
};

export default LogIn;
