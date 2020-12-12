import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid #444546;
  display: flex;
  position: fixed;
  width: 27%;
  left: 0;
  background-color: #242526;
  height: 100vh;
  color: white;
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

export const FontBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 15px;
  height: 60px;
  border-bottom: 1px solid #444546;
  justify-content: center;
  margin-bottom: 7px;

  & h1 {
    color: inherit;
  }
`;
