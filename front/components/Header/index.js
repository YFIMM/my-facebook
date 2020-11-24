import React from "react";
import Link from "next/link";

import {
  HeaderBar,
  HeaderLeft,
  Logo,
  LogoBox,
  SearchBox,
  Input,
  SearchIcon,
  HeaderMenu,
  HomeIcon,
  PeopleIcon,
  MessengerIcon,
  HeaderRight,
  ProfileBox,
  ProfileImgBox,
  IconBox,
  DropDownIcon,
  Notification,
  IconAndNotificationContainer,
} from "@components/Header/style";

const Header = () => {
  return (
    <HeaderBar>
      <HeaderLeft>
        <LogoBox>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </LogoBox>
        <SearchBox>
          <Input type="text" placeholder="Facebook 검색" />
          <SearchIcon />
        </SearchBox>
      </HeaderLeft>
      <HeaderMenu>
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
                <IconAndNotificationContainer>
                  <PeopleIcon />
                  <Notification>10</Notification>
                </IconAndNotificationContainer>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <IconAndNotificationContainer>
                  <MessengerIcon />
                  <Notification>10</Notification>
                </IconAndNotificationContainer>
              </a>
            </Link>
          </li>
        </ul>
      </HeaderMenu>
      <HeaderRight>
        <ProfileBox>
          <ProfileImgBox>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              alt="곽두철"
            />
          </ProfileImgBox>
          <p>강민석</p>
        </ProfileBox>
        <IconBox>
          <DropDownIcon />
        </IconBox>
      </HeaderRight>
    </HeaderBar>
  );
};

export default Header;
