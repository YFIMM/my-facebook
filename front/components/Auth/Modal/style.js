import styled, { keyframes } from "styled-components";
import { Avatar, Form, Input, Button } from "antd";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  left: 0;
  min-height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  flex-direction: column;
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

export const AntdForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 50%;
  align-items: center;
  justify-content: space-evenly;
`;

export const AntdFormItem = styled(Form.Item)`
  width: 100%;
  height: 70px;
`;

export const AntdInput = styled(Input)`
  font-size: 17px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #dddfe2;
  color: #1d2129;
  background-color: inherit;
  line-height: 16px;
  height: 50px;

  &:focus {
    border: 1px solid #1877f2;
    box-shadow: 0 0 0 2px #e7f3ff;
    caret-color: #1877f2;
    outline: none !important;
  }
`;

export const AntdButton = styled(Button)`
  width: 100%;
  height: 50px;
  background-color: #1877f2;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  line-height: 48px;
  cursor: pointer;
  text-align: center;
  color: white;
  font-weight: bold;
  border: none;
  outline: none;

  &: hover {
    background-color: #0a54b3;
    color: white;
  }

  &: focus {
    background-color: #1877f2;
    color: white;
  }
`;

const disappear = keyframes`
to   { visibility: hidden; }
`;

export const Error = styled.div`
  color: red;
  width: 100%;
  height: 20px;
  visibility: visible;
  font-size: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${disappear} 0s 3s forwards;
`;
