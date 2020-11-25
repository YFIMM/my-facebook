import styled from "styled-components";

export const SideBarItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  justify-content: space-between;
`;

export const ProfileImgBox = styled.div`
  position: relative;

  & img {
    width: 36px;
  }
`;

export const Online = styled.div`
  flex: 1;
  position: relative;
  position: absolute;
  width: 12px;
  height: 12px;
  background: green;
  border-radius: 50%;
  bottom: 7px;
  right: 0px;

  font-size: 12px;
`;

export const Username = styled.div`
  margin-left: 15px;
  font-size: 15px;
  font-weight: 500;
`;
