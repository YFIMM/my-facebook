import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Card from "@components/Messenger/SideBar/Card";

import { Wrapper, FontBox } from "@components/Messenger/SideBar/style";

const SideBar = ({ userData, onClickHandler }) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    setUserList(userList.concat(userData.Followers));
    setUserList(userList.concat(userData.Followings));

    setUserList((prevList) => Array.from(new Set(prevList)));
  }, []);

  return (
    <Wrapper>
      <FontBox>
        <h1>채팅</h1>
      </FontBox>
      {userList.map((v) => (
        <Card
          key={v.id}
          username={v.name}
          onClick={onClickHandler.bind(this, v.name, v.id)}
        />
      ))}
    </Wrapper>
  );
};

SideBar.propTypes = {
  userData: PropTypes.object.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default SideBar;
