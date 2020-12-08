import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import {
  Wrapper,
  AvatarContainer,
  Span,
  LightContainer,
  Light,
} from "@components/Home/Social/Card/style";

const Card = ({ username }) => {
  return (
    <Wrapper>
      <AvatarContainer>
        <Avatar size="large" icon={<UserOutlined />} />
      </AvatarContainer>
      <Span>{username}</Span>
      <LightContainer>
        <Light />
      </LightContainer>
    </Wrapper>
  );
};

Card.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Card;
