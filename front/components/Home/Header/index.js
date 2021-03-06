import React, { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Avatar, Dropdown, Menu } from "antd";
import { UserOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import axios from "axios";
import { useCookies } from "react-cookie";

import useSocket from "@hooks/useSocket";

import { SERVER } from "env";

import {
  HeaderBar,
  SearchWrapper,
  NavigatorWrapper,
  UserWrapper,
  LogoContainer,
  Logo,
  NavigatorContainer,
  HomeIcon,
  MessengerIcon,
  UserContainer,
  DropDownContainer,
  DropDownIcon,
} from "@components/Home/Header/style";

const Header = ({ userData }) => {
  const router = useRouter();

  const imageRef = useRef();

  const [socket, disconnectSocket] = useSocket("online");

  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

  const onChangeImage = useCallback((e) => {
    const imageFormData = new FormData();

    [].forEach.call(e.target.files, (f) => {
      imageFormData.append("image", f);
    });

    axios
      .post(`${SERVER}/user/image`, imageFormData, { withCredentials: true })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.error(err));
  }, []);

  const onClickImageUpload = useCallback(() => {
    imageRef.current.click();
  }, [imageRef.current]);

  const onClickMenu = useCallback(({ key }) => {
    if (key === "logout") {
      axios
        .post(`${SERVER}/auth/logout`, {}, { withCredentials: true })
        .then(() => {
          window.location.reload();
          removeCookie("accessToken");
        });
    }
  }, []);

  useEffect(() => {
    socket.emit("login", { id: userData.id });
  }, [socket]);

  const menu = (
    <Menu onClick={onClickMenu}>
      <Menu.Item
        key="logout"
        icon={<UserDeleteOutlined style={{ fontSize: "18px" }} />}
        style={{ color: "red", width: "200px" }}
      >
        로그아웃
      </Menu.Item>
    </Menu>
  );

  return (
    <HeaderBar>
      <SearchWrapper>
        <LogoContainer>
          <Logo />
        </LogoContainer>
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
          <input
            type="file"
            name="image"
            hidden
            ref={imageRef}
            onChange={onChangeImage}
            accept="image/x-png,image/jpeg"
          />
          <UserContainer onClick={onClickImageUpload}>
            {userData.profileImgUrl ? (
              <Avatar
                src={`http://localhost:5003/${userData.profileImgUrl}`}
                size={30}
              />
            ) : (
              <Avatar size={30} icon={<UserOutlined />} />
            )}
            <span>{userData.name}</span>
          </UserContainer>
          <DropDownContainer>
            <Dropdown placement="bottomLeft" overlay={menu} trigger={["click"]}>
              <DropDownIcon />
            </Dropdown>
          </DropDownContainer>
        </div>
      </UserWrapper>
    </HeaderBar>
  );
};

Header.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default Header;
