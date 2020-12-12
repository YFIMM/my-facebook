import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  margin: 0px 15px;
  cursor: pointer;
  border-radius: 10px;

  &: hover {
    background-color: #18191a;
  }
`;

export const Span = styled.span`
  margin-left: 5px;
  font-size: 15px;
`;
