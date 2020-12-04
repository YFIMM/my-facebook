import styled from "styled-components";

export const BodyWrapper = styled.div`
  width: 100%;
  max-height: 530px;
  height: 370px;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AvatarContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Span = styled.span`
  font-weight: 600;
  font-size: 0.9375rem;
  color: black;
  margin-left: 7px;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 155px;
  max-height: 338px;
  overflow-y: scroll;
`;

export const Textarea = styled.textarea`
  outline: none;
  border: none;
  width: 100%;
  height: 130px;
  max-height: 338px;
  overflow-y: auto;
  overflow-x: hidden;
  resize: none;

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

export const Button = styled.button`
  background-color: #1877f2;
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.2667;
  font-weight: 600;
  font-size: 0.9375rem;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &: hover {
    opacity: 0.7;
  }

  &: focus {
    outline: none;
    border: none;
  }
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 56px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  margin: 10px 0px;
  display: flex;
`;

export const FontBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  color: black;
  font-weight: 600;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  padding-left: 10px;
`;

export const IconBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
`;

export const ImageIcon = styled.i`
  width: 24px;
  height: 24px;
  background-position: 0 -208px;
  vertical-align: -0.25em;
  object-fit: cover;
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/LyUwOQZWVA7.png);
  background-size: 33px 561px;
  background-repeat: no-repeat;
  cursor: pointer;

  &: hover {
    opacity: 0.7;
  }
`;
