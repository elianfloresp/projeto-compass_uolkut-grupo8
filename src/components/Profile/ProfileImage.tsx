import { FC } from "react";
import { styled } from "styled-components";

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 114px;
  height: 114px;
  border: 2px solid #FFF;
  box-shadow: 0px 0px 0px 3px #ED6D25;

  @media (min-width : 768px) {
    width: 170px;
    height: 170px;
    border: 7px solid #ED6D25;
    border: 4px solid #FFF;
    box-shadow: 0px 0px 0px 3px #ED6D25;
  }
`;

export default ProfileImage;
