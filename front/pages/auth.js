import React, { useState, useCallback } from "react";

import { Wrapper, AuthContainer } from "@style/Auth";

import useInput from "@hooks/useInput";

import History from "@components/Auth/History";
import LogIn from "@components/Auth/LogIn";
import SignUp from "@components/Auth/SignUp";

const Auth = () => {
  const [goToSignUp, setGoToSignUp] = useState(false);

  const onChangeGoToSignUp = useCallback(() => {
    setGoToSignUp((prev) => !prev);
  }, []);

  return (
    <Wrapper>
      <AuthContainer>
        <History />
        {goToSignUp ? (
          <SignUp onChangeGoToSignUp={onChangeGoToSignUp} />
        ) : (
          <LogIn onChangeGoToSignUp={onChangeGoToSignUp} />
        )}
      </AuthContainer>
    </Wrapper>
  );
};

export default Auth;
