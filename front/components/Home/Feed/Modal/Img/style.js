import styled from "styled-components";

export const Wrapper = styled.div`
  overflow: auto;
  width: 100%;
  border: 1px solid red;
  height: 230px;

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

export const ImgWrapper = styled.div`
  width: 100%;
  height: ${(props) => props.height};
`;

export const OddBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  float: left;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0")};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0")};
  position: relative;
`;

export const EvenBox = styled.div`
  float: left;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0")};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0")};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MoreImages = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  color: white;
  font-weight: 600;
  font-size: 2rem;
  position: absolute;
  top: 0;
`;
