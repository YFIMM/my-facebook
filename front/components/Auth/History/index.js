import React from "react";
import PropTypes from "prop-types";

import {
  Wrapper,
  LogoContainer,
  BigFontBox,
  SmallFontBox,
  AuthHistoryCardContainer,
  AuthHistoryCard,
  UsernameBox,
  CloseBtn,
  ProfileImg,
  UserImg,
} from "@components/Auth/History/style";

const History = ({ onChangeOpenModal }) => {
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
        <AuthHistoryCard onClick={onChangeOpenModal}>
          <ProfileImg shape="square" icon={<UserImg />} />
          <UsernameBox>강민석</UsernameBox>
          <CloseBtn id="close-btn" />
        </AuthHistoryCard>
      </AuthHistoryCardContainer>
    </Wrapper>
  );
};

History.propTypes = {
  onChangeOpenModal: PropTypes.func.isRequired,
};

export default History;