import styled from "styled-components";
import NavbarProfile from "../components/UI/NavbarProfile2";

import EditProfileForm from "../components/Form/EditProfile";
import CardEditProfile from "../components/UI/CardEditProfile";

const StyledContainer = styled.div`
  background: #d9e6f7;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 32px;
  margin: 25px 0px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: space-evenly;
  }
`;

export default function Profile() {
  return (
    <>
      <NavbarProfile />
      <StyledContainer>
        <StyledBoxContainer>
          <CardEditProfile />
          <EditProfileForm />
        </StyledBoxContainer>
      </StyledContainer>
    </>
  );
}
