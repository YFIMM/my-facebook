import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Avatar, Badge } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

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
  const router = useRouter();

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
            <li
              style={{
                borderBottom:
                  router.pathname === "/" ? "2px solid #2d88ff" : "none",
              }}
            >
              <Link href="/">
                <a>
                  <HomeIcon
                    color={router.pathname === "/" ? "#2d88ff" : "#606770"}
                  />
                </a>
              </Link>
            </li>
            <li
              style={{
                borderBottom:
                  router.pathname === "/messenger"
                    ? "2px solid #2d88ff"
                    : "none",
              }}
            >
              <Link href="/messenger">
                <a>
                  <MessengerIcon
                    color={
                      router.pathname === "/messenger" ? "#2d88ff" : "#606770"
                    }
                  />
                </a>
              </Link>
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
