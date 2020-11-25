import React from "react";
import Link from "next/link";
import { Avatar } from "antd";
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
} from "@components/Header/style";

const Header = () => {
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
              <Link href="/">
                <a>
                  <HomeIcon />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <PeopleIcon />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <MessengerIcon />
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
            <span>강민석</span>
          </UserContainer>
          <DropDownContainer>
            <DropDownIcon />
          </DropDownContainer>
        </div>
      </UserWrapper>
    </HeaderBar>
  );
};

export default Header;
