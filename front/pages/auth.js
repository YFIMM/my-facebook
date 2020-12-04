import React, { useState, useCallback } from "react";
import axios from "axios";

import { Wrapper, AuthContainer } from "@style/Auth";

import { SERVER } from "env";

import fetcher from "@utils/fetcher";

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

export async function getServerSideProps(context) {
  const cookie = context.req ? context.req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";

  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }

  const userData = await fetcher(`${SERVER}/user`);

  if (userData) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: {} };
}

export default Auth;
