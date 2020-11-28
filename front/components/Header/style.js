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
  height: 56px;
  position: fixed;
  background-color: #242526;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  top: 0;
  left: 0;
`;

export const SearchWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 15%;
  height: 100%;
`;

export const Logo = styled(FaFacebook)`
  font-size: 40px;
  color: #3b5998;
`;

export const SearchContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid #3a3b3c;
  border-radius: 50px;
  background-color: #3a3b3c;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #606770;
`;

export const SearchIcon = styled(FaSistrix)`
  font-size: 18px;
  color: inherit;
  margin-left: 5px;
`;

export const Input = styled.input`
  color: inherit;
  text-indent: 20px;
  font-weight: normal;
  font: 400 13.3333px Arial;
  width: 70%;
  height: 100%;
  background-color: inherit;
  outline: none;
  border: none;
`;

export const NavigatorWrapper = styled.div`
  flex: 2.5;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavigatorContainer = styled.div`
  width: 80%;
  height: 100%;

  & ul {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;

    & li {
      list-style-type: none;
      float: left;
      height: 100%;
      display: flex;
      align-items: center;
      border-bottom: 2px solid #2d88ff;
      border-bottom-right-radius: 1px;
      border-bottom-left-radius: 1px;

      &:hover {
        opacity: 0.33;
      }
    }
  }
`;

export const HomeIcon = styled(FaHome)`
  font-size: 36px;
  color: #606770;
  color: #2d88ff;
`;

export const PeopleIcon = styled(BsPeopleFill)`
  font-size: 36px;
  color: #606770;
`;

export const MessengerIcon = styled(FaFacebookMessenger)`
  font-size: 36px;
  color: #606770;
`;

export const UserWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > div {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const UserContainer = styled.div`
  height: 70%;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 20px;
  width: 90px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  & span {
    color: #e4e6eb;
    font-weight: 600;
    font-size: 0.9375rem;
    line-height: 1.3333;
    margin-left: 5px;
  }
`;

export const DropDownContainer = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 100px;
  cursor: pointer;

  &: hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const DropDownIcon = styled(FaCaretDown)`
  font-size: 23px;
  color: #e4e6eb;
`;
