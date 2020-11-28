import styled from "styled-components";

export const Wrapper = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  width: 100%;

  & img {
    height: 70px;
    margin: 0px -20px;
  }
`;

export const BigFontBox = styled.div`
  font-family: SFProDisplay-Regular, Helvetica, Arial, sans-serif;
  font-size: 28px;
  font-weight: normal;
  line-height: 32px;
  color: #1c1e21;
  width: 100%;
`;

export const SmallFontBox = styled.div`
  color: #606770;
  font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  font-weight: normal;
  width: 100%;
`;

export const AuthHistoryCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
`;

export const AuthHistoryCard = styled.div`
  flex: 0 0 30%;
  margin: 0 0 20px 0;
  border-radius: 8px;
  box-shadow: 0 0 0 1px #dddfe2;
  height: 205px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:hover {
    box-shadow: 0 1px 8px 5px #dddfe2;
    text-decoration: none;

    & #close-btn {
      background-color: #fff;
      box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.3);
      transform: scale(1.5);
      transform-origin: bottom right;
      background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/wK96zoGeZ7e.png);
      background-repeat: no-repeat;
      background-size: 170px 86px;
      background-position: -34px -36px;
      height: 20px;
      width: 20px;
    }
  }

  & img {
    background-color: #f5f6f7;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width: 100%;
    height: 80%;
    object-fit: cover;
  }
`;

export const UsernameBox = styled.div`
  font-family: SFProText-Medium, Helvetica, Arial, sans-serif;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  text-decoration: none;
  text-overflow: ellipsis;
  color: #4b4f56;
  font-size: 18px;
  line-height: 22px;
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const CloseBtn = styled.div`
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  height: 16px;
  width: 16px;
  left: 4px;
  position: absolute;
  text-align: center;
  top: 4px;
  z-index: 1;
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/mPz9dRuZ0y0.png);
  background-repeat: no-repeat;
  background-size: 44px 66px;
  background-position: -22px -44px;
  height: 12px;
  opacity: 1;
  width: 12px;
`;
