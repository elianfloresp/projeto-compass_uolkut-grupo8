import { count } from "console";
import { styled } from "styled-components";
import ProfileImage from "./ProfileImage";
import ProfilePNG from "../../assets/profile.png";

const StyledCard = styled.div`
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

  & > p {
    color: #4B4B4B;
    font-family: "Roboto Flex";
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5rem;
    margin-top: 19px;
    
    &.small {
      font-size: 1.125rem; 
      margin-top: 26px;
    }
  }
`;

const ProfileCard = () => {
  const name = 'Artemis';

  const relationshipStatus = 'Solteiro';
  const country = 'Brasil';

  return (
    <StyledCard>
      <ProfileImage src={ProfilePNG} />
      <p>{name}</p>
      <p className="small">{relationshipStatus}, {country}</p>
    </StyledCard>
  );
}

export default ProfileCard;
