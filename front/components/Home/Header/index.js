import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Avatar, Badge } from "antd";
import { UserOutlined } from "@ant-design/icons";

import {
  HeaderBar,
  SearchWrapper,
  NavigatorWrapper,
  UserWrapper,
  LogoContainer,
  Logo,
  SearchContainer,
  InputContainer,
  SearchIcon,
  Input,
  NavigatorContainer,
  HomeIcon,
  PeopleIcon,
  MessengerIcon,
  UserContainer,
  DropDownContainer,
  DropDownIcon,
} from "@components/Home/Header/style";

const Header = ({ username }) => {
  return (
    <HeaderBar>
      <SearchWrapper>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <SearchContainer>
          <InputContainer>
            <SearchIcon />
            <Input type="text" placeholder="Facebook 검색" />
          </InputContainer>
        </SearchContainer>
      </SearchWrapper>
      <NavigatorWrapper>
        <NavigatorContainer>
          <ul>
            <li>
              <Badge>
                <Link href="/">
                  <a>
                    <HomeIcon />
                  </a>
                </Link>
              </Badge>
            </li>
            <li>
              <Badge count={5} size="small">
                <Link href="/">
                  <a>
                    <PeopleIcon />
                  </a>
                </Link>
              </Badge>
            </li>
            <li>
              <Badge count={5} size="small">
                <Link href="/">
                  <a>
                    <MessengerIcon />
                  </a>
                </Link>
              </Badge>
            </li>
          </ul>
        </NavigatorContainer>
      </NavigatorWrapper>
      <UserWrapper>
        <div>
          <UserContainer>
            <Avatar size={30} icon={<UserOutlined />} />
            <span>{username}</span>
          </UserContainer>
          <DropDownContainer>
            <DropDownIcon />
          </DropDownContainer>
        </div>
      </UserWrapper>
    </HeaderBar>
  );
};

Header.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Header;
