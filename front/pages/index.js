import React from "react";
import _JSXStyle from "styled-jsx/style";

import Header from "@components/Home/Header";
import SideBar from "@components/Home/SideBar";
import Feed from "@components/Home/Feed";
import Social from "@components/Home/Social";

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
