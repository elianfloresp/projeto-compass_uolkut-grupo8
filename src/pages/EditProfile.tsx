
import styled from "styled-components";
import NavbarProfile2 from "../components/UI/NavbarProfile2";

import EditProfileForm from "../components/Form/EditProfile";
import CardEditProfile from "../components/UI/CardEditProfile";


const StyledContainer = styled.div`
  min-height: 100vh;
  background: #D9E6F7;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;


const StyledBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 32px;
  margin: 25px 0px;
  @media(max-width: 780px){
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    gap: 0px;
    margin: 0px 0px;
  }
`;

export default function Profile(){
    return(
        <StyledContainer>
          <NavbarProfile2/>
            <StyledBoxContainer>
              <CardEditProfile />
              <div>
                  <EditProfileForm/>
              </div>
            </StyledBoxContainer>
        </StyledContainer>
    )
}
