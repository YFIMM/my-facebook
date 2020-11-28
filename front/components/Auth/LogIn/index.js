import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { message } from "antd";
import axios from "axios";

import useInput from "@hooks/useInput";

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
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();

      if (!password || !password.trim()) {
        message.error("비밀번호를 입력해주세요.", 2.5);
        return;
      }

      //http 요청
    },
    [email, password]
  );

  return (
    <Wrapper>
      <LogInContainer>
        <Form onSubmit={onSubmitForm}>
          <Input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={onChangeEmail}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onChangePassword}
          />
          <Button type="submit">로그인</Button>
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
