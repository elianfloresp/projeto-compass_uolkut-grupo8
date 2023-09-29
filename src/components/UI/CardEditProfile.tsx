import { count } from "console";
import { styled } from "styled-components";
import ProfileImage from "../Profile/ProfileImage";
import ProfileSVG from "../../assets/profile.svg";
import ModeEdit from "../../assets/modeedit.svg";

const StyledCard = styled.div`
  position: relative;
  width: 320px;
  height: 260px; 
  border-radius: 16px;
  background: #FDFEFF;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  @media (min-width : 768px) {
    width: 280px;
    height: 325px; 
  }

`;


const Cardbtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 199px;
  rigth: 191px;
  left: 47px;
  bottom: 83px;
  width: 42px;
  height: 43px; 
  border-radius: 50%;
  background: #FDFEFF;
  border: 2px solid #FFF;
  box-shadow: 0px 0px 0px 3px #ED6D25;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

`;

const CardbtnImage = styled.img`
  border-radius: 50%;
  width: 25px;
  height: 25px;

`;

const CardEditProfile = () => {


  return (
    <StyledCard>
      <ProfileImage src={ProfileSVG} />
      <Cardbtn>
        <CardbtnImage src={ModeEdit} />
      </Cardbtn>

    </StyledCard>
  );
}

export default CardEditProfile;
