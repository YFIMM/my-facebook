import styled from "styled-components";

export const FeedWrapper = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 10px;
`;

export const FeedContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
  max-width: 500px;
`;

export const StoryWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  max-width: 115px;
  min-width: 115px;
  height: 100px;
  border-radius: 7px;
  align-items: flex-start;
  overflow: hidden;
`;

export const StatusWrapper = styled.div`
  margin-top: 15px;
  background: white;
  padding: 5px 15px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  width: 500px;
`;

export const StatusHeader = styled.div`
  display: flex;
  padding-bottom: 10px;
  padding-top: 5px;
  justify-content: space-between;
`;

export const StatusHeaderProfileImgBox = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 5px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Input = styled.input`
  padding: 12px;
  border: none;
  background: #f0f2f5;
  border-radius: 100px;
  padding-left: 35px;
  padding-left: 15px;
  width: 420px;
`;
