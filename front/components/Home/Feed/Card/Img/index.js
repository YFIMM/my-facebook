import React from "react";
import PropTypes from "prop-types";

import {
  Wrapper,
  ImgContainer,
  Image,
  EvenBox,
  OddBox,
  MoreImages,
} from "@components/Home/Feed/Card/Img/style";

const Img = ({ images }) => {
  // const images = [
  //   "http://localhost:5003/1.png",
  //   "http://localhost:5003/2.png",
  //   "http://localhost:5003/3.png",
  //   "http://localhost:5003/13.png",
  //   "http://localhost:5003/14.jpg",
  //   "http://localhost:5003/3.png",
  //   "http://localhost:5003/13.png",
  //   "http://localhost:5003/14.jpg",
  // ];

  if (images.length > 5) {
    let marginRight = 0;

    return (
      <Wrapper height="500px">
        <ImgContainer>
          {[...Array(5)].map((v, i) => {
            if (i === 0) {
              marginRight = 0.12;
            } else if (i === 3) {
              marginRight = 0.25;
            }

            return (
              <OddBox
                key={images[i].id}
                width={i === 0 || i === 1 ? "49.875%" : "33%"}
                height="49.875%"
                marginRight={`${marginRight}%`}
                marginBottom="0.25%"
                marginLeft={i === 3 && "0.25%"}
              >
                {i === 4 ? (
                  <>
                    <Image
                      src={`http://localhost:5003/${images[i].src}`}
                      alt={images[i].src}
                    />
                    <MoreImages>{`+${images.length - 5}장`}</MoreImages>
                  </>
                ) : (
                  <Image
                    src={`http://localhost:5003/${images[i].src}`}
                    alt={images[i].src}
                  />
                )}
              </OddBox>
            );
          })}
        </ImgContainer>
      </Wrapper>
    );
  }

  return (
    <Wrapper height={images.length === 1 ? "250px" : "500px"}>
      <ImgContainer>
        {images.map((v, i) => {
          if (images.length === 1) {
            return (
              <OddBox key={v.id} width="100%" height="100%">
                <Image src={`http://localhost:5003/${v.src}`} alt={v.src} />
              </OddBox>
            );
          } else if (images.length === 2 || images.length === 4) {
            return (
              <EvenBox
                key={v.id}
                width={100 / images.length === 50 ? "100%" : "49.5%"}
                height={100 / images.length === 25 ? "49.5%" : "49.5%"}
                marginLeft={
                  (i === 1 || i === 3) && 100 / images.length === 25 && "1%"
                }
                marginTop={(i === 2 || i === 3) && "1%"}
                marginBottom={i === 0 && 100 / images.length === 50 && "1%"}
              >
                <Image src={`http://localhost:5003/${v.src}`} alt={v.src} />
              </EvenBox>
            );
          } else if (images.length === 3) {
            return (
              <OddBox
                marginRight={i === 0 && "1%"}
                key={v.id}
                width="49.5%"
                height={i === 0 ? "100%" : "49.8%"}
                marginBottom={(i === 1 || i === 2) && "0.4%"}
              >
                <Image src={`http://localhost:5003/${v.src}`} alt={v.src} />
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
                key={v.id}
                width={i === 0 || i === 1 ? "49.875%" : "33%"}
                height="49.875%"
                marginRight={`${marginRight}%`}
                marginBottom="0.25%"
                marginLeft={i === 3 && "0.5%"}
              >
                <Image src={`http://localhost:5003/${v.src}`} alt={v.src} />
              </OddBox>
            );
          }
        })}
      </ImgContainer>
    </Wrapper>
  );
};

Img.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Img;
