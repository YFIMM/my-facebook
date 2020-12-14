import styled from "styled-components";
import ScrollToBottom from "react-scroll-to-bottom";

export const Wrapper = styled.div`
  flex: 2.5 2.5 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

export const ChatContainer = styled.div`
  width: 73%;
  height: 100%;
  display: flex;
  align-items: center;
  color: white;
  flex-direction: column;
`;

export const ProfileContainer = styled.div`
  width: 73%;
  height: 60px;
  background-color: #242526;
  border: 1px solid #444546;
  font-size: 20px;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 10px;
  position: fixed;
`;

export const ChatListContainer = styled.div`
  width: 100%;
  height: 400px;
  border-bottom: 1px solid #444546;
  border-right: 1px solid #444546;
  margin-top: 60px;
  overflow-y: auto;

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

export const ChatData = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  color: white;
  font-weight: 600;
  font-size: 15px;
  margin: 0 3px;
`;

export const UserChat = styled.div`
  width: 90%;
  height: 100%;
  font-size: 15px;
  display: flex;
  align-items: center;
`;

export const SendContainer = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
`;

export const TextArea = styled.input`
  width: 88%;
  height: 100%;
  resize: none;
  overflow: hidden;
  border-radius: 10px;
  font-size: 15px;
  background-color: #242526;

  &:focus {
    border: 1px solid #1877f2;
    box-shadow: 0 0 0 2px #e7f3ff;
    caret-color: #1877f2;
    outline: none !important;
  }
`;
