import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid red;
  display: flex;
  position: fixed;
  width: 20%;
  left: 0;

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
