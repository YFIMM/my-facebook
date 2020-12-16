import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import _JSXStyle from "styled-jsx/style";

import "antd/dist/antd.css";
import "react-image-lightbox/style.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: "Roboto", sans-serif;
          font-size: 1.5rem;
          background-color: #18191a;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          min-width: 320px;
          height: 100%;
          box-sizing: border-box;
          display: block;
          line-height: 1.4285em;
        }
      `}</style>
      <Head>
        <meta charSet="utf-8" />
        <link
          rel="shortcut icon"
          href="https://www.facebook.com/images/fb_icon_325x325.png"
        />
        <title>Facebook - 로그인 또는 가입</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default MyApp;
