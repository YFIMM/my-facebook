import React from "react";
import Link from "next/link";
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
            <Input type="text" placeholder="Facebook 검 색" />
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
