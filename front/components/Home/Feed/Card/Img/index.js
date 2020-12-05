import React from "react";

import {
  Wrapper,
  ImgContainer,
  Image,
  EvenBox,
  OddBox,
} from "@components/Home/Feed/Card/Img/style";

const Img = () => {
  const test = [
    "http://localhost:5003/1.png",
    "http://localhost:5003/2.png",
    "http://localhost:5003/3.png",
    "http://localhost:5003/13.png",
    "http://localhost:5003/14.jpg",
  ];
  const imgLen = test.length <= 5 ? test.length : 5;
  return (
    <Wrapper height={imgLen === 1 ? "250px" : "500px"}>
      <ImgContainer>
        {test.map((v, i) => {
          if (imgLen === 1) {
            return (
              <OddBox key={i} width="100%" height="100%">
                <Image src={v} alt={v} />
              </OddBox>
            );
          } else if (imgLen % 2 === 0) {
            return (
              <EvenBox
                key={i}
                width={100 / imgLen === 50 ? "100%" : "50%"}
                height={100 / imgLen === 25 ? "50%" : "50%"}
              >
                <Image src={v} alt={v} />
              </EvenBox>
            );
          } else if (imgLen === 3) {
            return (
              <OddBox key={i} width="50%" height={i === 0 ? "100%" : "50%"}>
                <Image src={v} alt={v} />
              </OddBox>
            );
          } else if (imgLen === 5) {
            return (
              <OddBox
                key={i}
                width={i === 0 || i === 1 ? "50%" : "33%"}
                height="50%"
              >
                <Image src={v} alt={v} />
              </OddBox>
            );
          }
        })}
      </ImgContainer>
    </Wrapper>
  );
};

export default Img;
