import styled from "styled-components";
import {
  FaFacebook,
  FaSistrix,
  FaHome,
  FaFacebookMessenger,
  FaCaretDown,
} from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  background: white;
  top: 0;
  z-index: 100;
  padding: 8px 20px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoBox = styled.div`
  margin-right: 10px;
`;

export const Logo = styled(FaFacebook)`
  font-size: 40px;
  color: #3b5998;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  padding: 12px;
  border: none;
  background: #f0f2f5;
  border-radius: 100px;
  padding-left: 35px;
`;

export const SearchIcon = styled(FaSistrix)`
  position: absolute;
  left: 10px;
  color: black;
  font-size: 18px;
`;

export const HeaderMenu = styled.div`
  & ul {
    display: flex;
    align-items: center;

    & li:not(:last-child) {
      margin-right: 75px;
    }
  }
`;

export const HomeIcon = styled(FaHome)`
  font-size: 25px;
  color: #606770;
  position: relative;
`;

export const PeopleIcon = styled(BsPeopleFill)`
  font-size: 25px;
  color: #606770;
  position: relative;
`;

export const MessengerIcon = styled(FaFacebookMessenger)`
  font-size: 25px;
  color: #606770;
  position: relative;
`;

export const IconAndNotificationContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const Notification = styled.div`
  display: flex;
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: red;
  top: -10px;
  left: 15px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  color: #fff;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;

  & p {
    font-weight: 300;
    font-size: 1rem;
  }
`;

export const ProfileImgBox = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 5px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  background: #f0f2f5;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;

export const DropDownIcon = styled(FaCaretDown)`
  font-size: 25px;
  color: #606770;
`;
