import React from "react";

import {
  Wrapper,
  ImgWrapper,
  OddBox,
  EvenBox,
  Image,
  MoreImages,
} from "@components/Home/Feed/Modal/Img/style";

const Img = ({ images }) => {
  if (images.length > 5) {
    let marginRight = 0;

    return (
      <Wrapper>
        <ImgWrapper height="500px">
          {[...Array(5)].map((v, i) => {
            if (i === 0) {
              marginRight = 0.12;
            } else if (i === 3) {
              marginRight = 0.25;
            }

            return (
              <OddBox
                key={i}
                width={i === 0 || i === 1 ? "49.875%" : "33%"}
                height="49.875%"
                marginRight={`${marginRight}%`}
                marginBottom="0.25%"
                marginLeft={i === 3 && "0.25%"}
              >
                {i === 4 ? (
                  <>
                    <Image src={images[i]} alt={images[i]} />
                    <MoreImages>{`+${images.length - 5}장`}</MoreImages>
                  </>
                ) : (
                  <Image src={images[i]} alt={images[i]} />
                )}
              </OddBox>
            );
          })}
        </ImgWrapper>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ImgWrapper height={images.length > 1 ? "500px" : "100%"}>
        {images.map((v, i) => {
          if (images.length === 1) {
            return (
              <OddBox key={i} width="100%" height="100%">
                <Image src={v} alt={v} />
              </OddBox>
            );
          } else if (images.length === 2 || images.length === 4) {
            return (
              <EvenBox
                key={i}
                width={100 / images.length === 50 ? "100%" : "49.5%"}
                height={100 / images.length === 25 ? "49.5%" : "49.5%"}
                marginLeft={
                  (i === 1 || i === 3) && 100 / images.length === 25 && "1%"
                }
                marginTop={(i === 2 || i === 3) && "1%"}
                marginBottom={i === 0 && 100 / images.length === 50 && "1%"}
              >
                <Image src={v} alt={v} />
              </EvenBox>
            );
          } else if (images.length === 3) {
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
          } else if (images.length === 5) {
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
      </ImgWrapper>
    </Wrapper>
  );
};

export default Img;
