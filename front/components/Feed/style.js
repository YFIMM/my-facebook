import styled from "styled-components";

export const FeedWrapper = styled.div`
  border: 1px solid blue;
  flex: 2.5 2.5 auto;
  display: flex;
  justify-content: center;
`;

export const FeedContainer = styled.div`
  width: 50%;
  height: 100%;
`;

export const PostBox = styled.div`
  background-color: #242526;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  margin: 10px 0px;
  flex-direction: column;
`;

export const Divider = styled.div`
  width: 80%;
  height: 1px;
  background-color: #b0b3b8;
  border-radius: 2px;
`;

export const PostBtn = styled.div`
  width: 420px;
  cursor: pointer;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #b0b3b8;
  font-size: 1.0625rem;
  padding-left: 7px;
  height: 40px;
  display: flex;
  align-items: center;
  margin-left: 8px;

  &: hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
