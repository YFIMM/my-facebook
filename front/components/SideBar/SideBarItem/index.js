import React from "react";

import {
  SideBarItemWrapper,
  ProfileImgBox,
  Online,
  Username,
} from "@components/SideBar/SideBarItem/style";

const SideBarItem = () => {
  return (
    <SideBarItemWrapper>
      <ProfileImgBox>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          alt="aa"
        />
        <Online />
      </ProfileImgBox>
      <Username>곽두철</Username>
    </SideBarItemWrapper>
  );
};

export default SideBarItem;
