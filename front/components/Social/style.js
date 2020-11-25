import styled from "styled-components";

export const SocialWrapper = styled.div`
  flex: 2;
  position: relative;
  width: 300px;
`;

export const SocialContainer = styled.div`
  position: fixed;
  max-width: 300px;
  max-height: 90vh;
  right: 0;
  padding-right: 10px;

  &:hover {
    overflow-y: scroll;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

export const Title = styled.h4`
  font-size: 17px;
  color: #65676b;
`;
