import React from "react";

import {
  FeedWrapper,
  FeedContainer,
  StatusWrapper,
  StatusHeader,
  StatusHeaderProfileImgBox,
  StoryWrapper,
  Input,
} from "@components/Feed/style";

const Feed = () => {
  return (
    <FeedWrapper>
      <StoryWrapper />
      <FeedContainer>
        <StatusWrapper>
          <StatusHeader>
            <StatusHeaderProfileImgBox>
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                alt="곽두철"
              />
            </StatusHeaderProfileImgBox>
            <Input placeholder="강민석님" />
          </StatusHeader>
        </StatusWrapper>
      </FeedContainer>
    </FeedWrapper>
  );
};

export default Feed;
