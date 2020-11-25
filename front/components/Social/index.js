import React from "react";

import SideBarItem from "@components/SideBar/SideBarItem";

import {
  SocialWrapper,
  SocialContainer,
  ContactContainer,
  Title,
} from "@components/Social/style";

const Social = () => {
  return (
    <SocialWrapper>
      <SocialContainer>
        <ContactContainer>
          <Title>연락처</Title>
        </ContactContainer>
        <SideBarItem />
      </SocialContainer>
    </SocialWrapper>
  );
};

export default Social;
