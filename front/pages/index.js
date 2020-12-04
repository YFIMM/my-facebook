import React from "react";
import _JSXStyle from "styled-jsx/style";
import useSWR from "swr";
import axios from "axios";

import { SERVER } from "env";

import fetcher from "@utils/fetcher";

import Header from "@components/Home/Header";
import SideBar from "@components/Home/SideBar";
import Feed from "@components/Home/Feed";
import Social from "@components/Home/Social";

const Home = ({ userData }) => {
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
        <Feed username={userData.name} />
        <Social />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const cookie = context.req ? context.req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";

  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
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

export default Home;
