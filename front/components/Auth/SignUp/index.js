import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { message } from "antd";
import axios from "axios";

import useInput from "@hooks/useInput";

import {
  Wrapper,
  Form,
  Input,
  Button,
  Divider,
  GoToBtn,
  Error,
} from "@components/Auth/LogIn/style";
import { SignUpContainer } from "@components/Auth/SignUp/style";

const SignUp = ({ onChangeGoToSignUp }) => {
  const [name, onChangeName] = useInput("");
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const [passwordCheck, setPasswordCheck] = useState("");

  const [mismatchError, setMismatchError] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMismatchError(password !== e.target.value);
    },
    [password]
  );

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();

      if (!name || !name.trim()) {
        message.error("닉네임을 입력해주세요.", 2.5);
        return;
      }

      if (!mismatchError) {
        //http 요청
      } else {
        message.error("비밀번호가 일치하지 않습니다.", 2.5);
        return;
      }
    },
    [email, password, name, passwordCheck, mismatchError]
  );

  return (
    <Wrapper>
      <SignUpContainer>
        <Form onSubmit={onSubmitForm}>
          <Input
            type="text"
            placeholder="이름"
            value={name}
            onChange={onChangeName}
          />
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
          <Input
            type="password"
            placeholder="비밀번호 확인"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
          />
          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          <Button type="submit">회원가입</Button>
          <Divider />
          <div
            style={{
              width: "100%",
              height: "20%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <GoToBtn onClick={onChangeGoToSignUp}>로그인 하러가기</GoToBtn>
          </div>
        </Form>
      </SignUpContainer>
    </Wrapper>
  );
};

SignUp.propTypes = {
  onChangeGoToSignUp: PropTypes.func.isRequired,
};

export default SignUp;
