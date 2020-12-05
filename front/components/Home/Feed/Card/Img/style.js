import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  background-color: inherit;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const OddBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  float: left;
`;

export const EvenBox = styled.div`
  float: left;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
