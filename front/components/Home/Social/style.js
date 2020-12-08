import styled from "styled-components";

export const SocialWrapper = styled.div`
  display: flex;
  overflow: auto;
  position: fixed;
  right: 0;
  width: 20%;
  height: 100vh;
  flex-direction: column;

  &:hover {
    overflow-y: scroll;
  }

  &:: -webkit-scrollbar {
    width: 10px;
  }
  &:: -webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &:: -webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

export const Span = styled.span`
  color: inherit;
  width: 100%;
  height: 80px;
  font-size: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid white;
  display: flex;
  background-color: white;
  margin-bottom: 8px;
`;

export const UserListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
