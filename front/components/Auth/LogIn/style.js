import styled from "styled-components";

export const Wrapper = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const LogInContainer = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: none;
  justify-content: center;
  margin-top: 40px;
`;

export const Form = styled.form`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Input = styled.input`
  font-size: 17px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #dddfe2;
  color: #1d2129;
  background-color: inherit;
  line-height: 16px;
  height: 50px;

  &:focus {
    border: 1px solid #1877f2;
    box-shadow: 0 0 0 2px #e7f3ff;
    caret-color: #1877f2;
    outline: none !important;
  }
`;

export const Button = styled.div`
  width: 100%;
  height: 50px;
  background-color: #1877f2;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  line-height: 48px;
  cursor: pointer;
  text-align: center;
  color: white;
  font-weight: bold;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #dadde1;
`;

export const GoToBtn = styled.div`
  background-color: #42b72a;
  width: 50%;
  height: 50px;
  font-size: 20px;
  line-height: 48px;
  cursor: pointer;
  text-align: center;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
`;
