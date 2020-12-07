import React from "react";
import PropTypes from "prop-types";

import {
  Wrapper,
  ImgWrapper,
  OddBox,
  EvenBox,
  Image,
  MoreImages,
} from "@components/Home/Feed/Modal/Img/style";

const Img = ({ imagePaths }) => {
  if (imagePaths.length > 5) {
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
                    <Image
                      src={`http://localhost:5003/${imagePaths[i]}`}
                      alt={imagePaths[i]}
                    />
                    <MoreImages>{`+${imagePaths.length - 5}장`}</MoreImages>
                  </>
                ) : (
                  <Image
                    src={`http://localhost:5003/${imagePaths[i]}`}
                    alt={imagePaths[i]}
                  />
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
      <ImgWrapper height={imagePaths.length > 1 ? "500px" : "100%"}>
        {imagePaths.map((v, i) => {
          if (imagePaths.length === 1) {
            return (
              <OddBox key={i} width="100%" height="100%">
                <Image src={`http://localhost:5003/${v}`} alt={v} />
              </OddBox>
            );
          } else if (imagePaths.length === 2 || imagePaths.length === 4) {
            return (
              <EvenBox
                key={i}
                width={100 / imagePaths.length === 50 ? "100%" : "49.5%"}
                height={100 / imagePaths.length === 25 ? "49.5%" : "49.5%"}
                marginLeft={
                  (i === 1 || i === 3) && 100 / imagePaths.length === 25 && "1%"
                }
                marginTop={(i === 2 || i === 3) && "1%"}
                marginBottom={i === 0 && 100 / imagePaths.length === 50 && "1%"}
              >
                <Image src={`http://localhost:5003/${v}`} alt={v} />
              </EvenBox>
            );
          } else if (imagePaths.length === 3) {
            return (
              <OddBox
                marginRight={i === 0 && "1%"}
                key={i}
                width="49.5%"
                height={i === 0 ? "100%" : "49.8%"}
                marginBottom={(i === 1 || i === 2) && "0.4%"}
              >
                <Image src={`http://localhost:5003/${v}`} alt={v} />
              </OddBox>
            );
          } else if (imagePaths.length === 5) {
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
                <Image src={`http://localhost:5003/${v}`} alt={v} />
              </OddBox>
            );
          }
        })}
      </ImgWrapper>
    </Wrapper>
  );
};

Img.propTypes = {
  imagePaths: PropTypes.array.isRequired,
};

export default Img;
