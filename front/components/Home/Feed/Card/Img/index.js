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
    // "http://localhost:5003/3.png",
    // "http://localhost:5003/13.png",
    // "http://localhost:5003/14.jpg",
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
                width={100 / imgLen === 50 ? "100%" : "49.5%"}
                height={100 / imgLen === 25 ? "49.5%" : "49.5%"}
                marginLeft={(i === 1 || i === 3) && 100 / imgLen === 25 && "1%"}
                marginTop={(i === 2 || i === 3) && "1%"}
                marginBottom={i === 0 && 100 / imgLen === 50 && "1%"}
              >
                <Image src={v} alt={v} />
              </EvenBox>
            );
          } else if (imgLen === 3) {
            return (
              <OddBox
                marginRight={i === 0 && "1%"}
                key={i}
                width="49.5%"
                height={i === 0 ? "100%" : "49.8%"}
                marginBottom={(i === 1 || i === 2) && "0.4%"}
              >
                <Image src={v} alt={v} />
              </OddBox>
            );
          } else if (imgLen === 5) {
            let marginRight = 0;
            if (i === 0) {
              marginRight = 0.25;
            } else if (i === 3) {
              marginRight = 0.5;
            }

            return (
              <OddBox
                key={i}
                width={i === 0 || i === 1 ? "49.875%" : "33%"}
                height="49.875%"
                marginRight={`${marginRight}%`}
                marginBottom="0.25%"
                marginLeft={i === 3 && "0.5%"}
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
