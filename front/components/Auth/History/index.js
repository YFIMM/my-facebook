import React from "react";

import {
  Wrapper,
  LogoContainer,
  BigFontBox,
  SmallFontBox,
  AuthHistoryCardContainer,
  AuthHistoryCard,
  UsernameBox,
  CloseBtn,
} from "@components/Auth/History/style";

const History = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="페이스북"
        />
      </LogoContainer>
      <BigFontBox>최근 로그인 기록</BigFontBox>
      <SmallFontBox>사진을 클릭하거나 계정을 추가하세요.</SmallFontBox>
      <AuthHistoryCardContainer>
        <AuthHistoryCard>
          <img
            src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.30497-1/c141.0.480.480a/p480x480/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&ccb=2&_nc_sid=dbb9e7&_nc_ohc=e0bNNqefIggAX-DIGiG&_nc_ht=scontent-ssn1-1.xx&tp=27&oh=f0efe469f7261d94f1ad7944d1b0380f&oe=5FE6B988"
            alt="강민석"
          />
          <UsernameBox>강민석</UsernameBox>
          <CloseBtn id="close-btn" />
        </AuthHistoryCard>
      </AuthHistoryCardContainer>
    </Wrapper>
  );
};

export default History;
