import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import useSocket from "@hooks/useSocket";

import Card from "@components/Home/Social/Card";

import {
  SocialWrapper,
  Span,
  Divider,
  UserListContainer,
} from "@components/Home/Social/style";

const Social = ({ userData }) => {
  const [socket, disconnectSocket] = useSocket("online");

  const [userList, setUserList] = useState([]);
  const [onlineUserList, setOnlineUserList] = useState([]);

  useEffect(() => {
    setUserList((prev) => prev.concat(userData.Followers));
    setUserList((prev) => prev.concat(userData.Followings));

    setUserList((prevList) => Array.from(new Set(prevList)));
  }, []);

  useEffect(() => {
    socket.on("onlineUsers", (data) => {
      setOnlineUserList(data);
    });
  }, [socket]);

  return (
    <SocialWrapper style={{ color: "white" }}>
      <Span>팔로잉/팔로워 목록</Span>
      <Divider />
      <UserListContainer>
        {userList.length > 0 &&
          userList.map((v, i) => {
            const isOnline = onlineUserList.find((e) => Number(e) === v.id)
              ? true
              : false;
            return <Card key={v.id} isOnline={isOnline} username={v.name} />;
          })}
      </UserListContainer>
    </SocialWrapper>
  );
};

Social.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default Social;
