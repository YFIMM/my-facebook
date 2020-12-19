import React, { useEffect } from "react";
import _JSXStyle from "styled-jsx/style";
import useSWR from "swr";
import axios from "axios";

import { SERVER } from "env";

import useSocket from "@hooks/useSocket";

import fetcher from "@utils/fetcher";

import Header from "@components/Home/Header";
import SideBar from "@components/Home/SideBar";
import Feed from "@components/Home/Feed";
import Social from "@components/Home/Social";

const Home = ({ userData, posts }) => {
  const [socket, disconnectSocket] = useSocket();
  // console.log("hello: ", userData);

  // useEffect(() => {
  //   socket.emit("login", { id: userData.id });
  // }, []);

  // useEffect(() => {
  //   return () => {
  //     disconnectSocket();
  //   };
  // }, [userData.id]);

  console.log(posts);

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
        <SideBar />
        <Feed userData={userData} username={userData.name} posts={posts} />
        <Social userData={userData} />
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
