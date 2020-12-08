import React from "react";
import axios from "axios";

import { SERVER } from "env";

import fetcher from "@utils/fetcher";

import Header from "@components/Home/Header";
import SideBar from "@components/Messenger/SideBar";
import Chat from "@components/Messenger/Chat";

const Messenger = ({ userData }) => {
  return (
    <>
      <Header username={userData.name} />
      <div
        style={{
          display: "flex",
          width: "100%",
          paddingTop: "56px",
        }}
      >
        <SideBar />
        <Chat />
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
