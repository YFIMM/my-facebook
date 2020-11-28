import React from "react";

import { Wrapper, AuthContainer } from "@style/Auth";

import History from "@components/Auth/History";
import LogIn from "@components/Auth/LogIn";

const Auth = () => {
  return (
    <Wrapper>
      <AuthContainer>
        <History />
        <LogIn />
      </AuthContainer>
    </Wrapper>
  );
};

export default Auth;
