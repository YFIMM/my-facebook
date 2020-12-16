import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  background-color: inherit;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
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
