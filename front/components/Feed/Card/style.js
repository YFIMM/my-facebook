import styled from "styled-components";
import ShowMoreText from "react-show-more-text";
import { LikeOutlined } from "@ant-design/icons";

export const CardWrapper = styled.div`
  background-color: #242526;
  width: 100%;
  display: flex;
  align-items: flex-start;
  border-radius: 8px;
  margin-bottom: 10px;
  color: #e4e6eb;
  flex-direction: column;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  height: 48px;
  background-color: inherit;
  border-radius: inherit;
  display: flex;
  align-items: center;
  padding-left: 8px;
`;

export const UsernameContainer = styled.div`
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  padding-left: 4px;
`;

export const Content = styled(ShowMoreText)`
  padding-left: 8px;
  background-color: inherit;
  border-radius: inherit;
  width: 100%;
  color: inherit;
  font-size: 15px;
  line-height: 1.3333;
`;

export const ImgContainer = styled.div`
  background-color: inherit;
  max-height: 500px;
  width: 100%;
`;

export const BtnContainer = styled.div`
  background-color: inherit;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  padding-left: 8px;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  border-radius: 2px;
  background-color: #b0b3b8;
  margin: 10px 0px;
`;

export const LikeContainer = styled.div`
  width: 156px;
  height: 100%;
  border-radius: inherit;
  cursor: pointer;
  background-color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;

  & span {
    font-size: 0.9375rem;
    color: inherit;
    font-weight: 600;
    margin-left: 4px;
  }

  &: hover {
    opacity: 0.33;
  }
`;

export const Like = styled(LikeOutlined)`
  font-size: 30px;
  color: rgb(32, 120, 244);
`;
