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

const Home = ({ userData, posts }) => {
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
        <Feed userId={userData.id} username={userData.name} posts={posts} />
        <Social />
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

  const posts = await fetcher(`${SERVER}/posts`);

  return { props: { userData, posts } };
}

export default Home;
