import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import "../style.css";

const MyApp = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link
          rel="shortcut icon"
          href="https://www.facebook.com/images/fb_icon_325x325.png"
        />
        <title>Facebook - 로그인 또는 가입</title>
      </Head>
      <Component />
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default MyApp;
