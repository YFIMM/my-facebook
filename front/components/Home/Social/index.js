import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Card from "@components/Home/Social/Card";

import {
  SocialWrapper,
  Span,
  Divider,
  UserListContainer,
} from "@components/Home/Social/style";

const Social = ({ userData }) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    setUserList(userList.concat(userData.Followers));
    setUserList(userList.concat(userData.Followings));

    setUserList((prevList) => Array.from(new Set(prevList)));
  }, []);

  console.log(userList);

  return (
    <SocialWrapper style={{ color: "white" }}>
      <Span>팔로잉/팔로워 목록</Span>
      <Divider />
      <UserListContainer>
        {userList.length > 0 &&
          userList.map((v, i) => <Card username={v.name} />)}
      </UserListContainer>
    </SocialWrapper>
  );
};

Social.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default Social;
