import React from "react";
import _JSXStyle from "styled-jsx/style";

import Header from "@components/Header";
import SideBar from "@components/SideBar";
import Feed from "@components/Feed";
import Social from "@components/Social";

const Home = () => {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          width: "100%",
          paddingTop: "56px",
        }}
      >
        <SideBar />
        <Feed />
        <Social />
      </div>
    </>
  );
};

export default Home;
