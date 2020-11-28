import React, { useState, useCallback } from "react";

import { Wrapper, AuthContainer } from "@style/Auth";

import History from "@components/Auth/History";
import LogIn from "@components/Auth/LogIn";
import SignUp from "@components/Auth/SignUp";
import Modal from "@components/Auth/Modal";

const Auth = () => {
  const [goToSignUp, setGoToSignUp] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const onChangeGoToSignUp = useCallback(() => {
    setGoToSignUp((prev) => !prev);
  }, []);

  const onChangeOpenModal = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);

  return (
    <Wrapper>
      <AuthContainer>
        <History onChangeOpenModal={onChangeOpenModal} />
        {goToSignUp ? (
          <SignUp onChangeGoToSignUp={onChangeGoToSignUp} />
        ) : (
          <LogIn onChangeGoToSignUp={onChangeGoToSignUp} />
        )}
      </AuthContainer>
      {openModal && (
        <Modal openModal={openModal} onChangeOpenModal={onChangeOpenModal} />
      )}
    </Wrapper>
  );
};

export default Auth;
