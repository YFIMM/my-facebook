import React, { useState, useCallback } from "react";
import axios from "axios";

import { SERVER } from "env";

import fetcher from "@utils/fetcher";

import Header from "@components/Home/Header";
import SideBar from "@components/Messenger/SideBar";
import Chat from "@components/Messenger/Chat";

const Messenger = ({ userData }) => {
  const [userInfo, setUserInfo] = useState({
    username: null,
    userId: null,
  });

  const onClickHandler = useCallback((username, userId) => {
    setUserInfo({
      username,
      userId,
    });
  }, []);

  return (
    <>
      <Header userData={userData} />
      <div
        style={{
          display: "flex",
          width: "100%",
          paddingTop: "56px",
        }}
      >
        <SideBar onClickHandler={onClickHandler} userData={userData} />
        {!Object.values(userInfo).includes(null) && (
          <Chat userId={userInfo.userId} username={userInfo.username} />
        )}
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const accessToken = context.req ? context.req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";

  if (context.req && accessToken) {
    axios.defaults.headers.Cookie = accessToken;
  }

  const userData = await fetcher(`${SERVER}/user`);

  if (!userData) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return { props: { userData } };
}

export default Messenger;
