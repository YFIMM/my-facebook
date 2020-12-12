import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { Wrapper, Span } from "@components/Messenger/SideBar/Card/style";

const Card = ({ username, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Avatar size={40} icon={<UserOutlined />} />
      <Span>{username}</Span>
    </Wrapper>
  );
};

Card.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Card;
