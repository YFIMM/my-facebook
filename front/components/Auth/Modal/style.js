import styled from "styled-components";
import { Avatar } from "antd";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  left: 0;
  min-height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 400;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 25%;
  height: 500px;
  border-radius: 8px;
  background-color: #fff;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const CloseBtnContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CloseBtn = styled(Avatar)`
  cursor: pointer;
  background-color: #ebedf0;

  &:hover {
    background-color: #dadde1;
  }
`;

export const ProfileImgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 190px;

  & span {
    font-family: SFProText-Medium, Helvetica, Arial, sans-serif;
    font-size: 17px;
    line-height: 20px;
    margin-top: 10px;
  }
`;

export const ProfileImg = styled(Avatar)`
  background-color: #dddfe2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 50%;
  align-items: center;
  justify-content: space-evenly;
`;
