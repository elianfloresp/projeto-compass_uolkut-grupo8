import styled from "styled-components";
import ContainerProfile from "../components/Profile/ContainerProfile";
import FriendComunity from "../components/Profile/FrienComunity";
import Img from "../components/Profile/Img";
import NavbarProfile from "../components/UI/NavbarProfile2";

import ProfileComponent from "../components/Profile/ProfileComponent";

import { useNavigate } from "react-router-dom";

import Fernando from "../images/friends/fernando.png";
import Ana from "../images/friends/ana.png";
import Carlos from "../images/friends/carlos.png";
import Carol from "../images/friends/carol.png";
import Eiji from "../images/friends/eiji.png";
import Julia from "../images/friends/julia.png";
import Matheus from "../images/friends/matheus.png";
import Ramos from "../images/friends/ramos.png";
import Vitor from "../images/friends/vitor.png";

import Cars from "../images/categorys/carrs.png";
import Animes from "../images/categorys/animes.png";
import Coffe from "../images/categorys/coffe.png";
import Crazy from "../images/categorys/crazy.png";
import Desenhos from "../images/categorys/desenhos.png";
import Fofos from "../images/categorys/fofos.png";
import Leitura from "../images/categorys/leitura.png";
import Eggy from "../images/categorys/ovo.png";
import SearchInput from "../components/Profile/SearchInput";

const friendList = [
  { names: "Fernando", src: Fernando },
  { names: "Ana", src: Ana },
  { names: "Carlos", src: Carlos },
  { names: "Vitor", src: Vitor },
  { names: "Matheus", src: Matheus },
  { names: "Ramos", src: Ramos },
  { names: "Eiji", src: Eiji },
  { names: "Julia", src: Julia },
  { names: "Carol", src: Carol },
];

const comunityList = [
  { names: "Carros", src: Cars },
  { names: "Desenhos", src: Desenhos },
  { names: "Crazy", src: Crazy },
  { names: "Fofos", src: Fofos },
  { names: "Animes", src: Animes },
  { names: "Leitura", src: Leitura },
  { names: "Meu ovo", src: Eggy },
  { names: "My books", src: Leitura },
  { names: "Cafeeee", src: Coffe },
]

const StyledText1 = styled.div`
  margin-top: 19px;
  margin-bottom: 26px;

  color: #4b4b4b;
  font-family: Roboto Flex;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media (max-width: 780px) {
    color: #4b4b4b;
    font-family: Roboto Flex;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin-top: 25px;
    margin-bottom: 16px;
  }
`;

const StyledText2 = styled.div`
  color: #4b4b4b;
  font-family: Roboto Flex;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const StyledContainer = styled.div`
  min-height: 100vh;
  background: #d9e6f7;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 280px;
  height: 56px;
  border: none;
  border-radius: 16px;
  background: #fdfeff;

  color: #ed6d25;
  font-family: Roboto Flex;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  margin-top: 31px;
  @media (max-width: 780px) {
    width: 320px;
    height: 50px;
    margin-top: 16px;
    margin-bottom: 32px;
  }
`;

const StyledBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 32px;
  margin: 25px 0px;
  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    gap: 0px;
    margin: 0px 0px;
  }
`;

const ComunityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30.5px;
  flex-wrap: wrap;

  padding-top: 32px;
  @media (max-width: 765px) {
    gap: 38.57px;
  }
`;

const MobileOnly = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }
`;

export default function Profile() {
  const navigate = useNavigate();

  function handleButton() {
    navigate("/EditProfile");
  }

  return (
    <StyledContainer>
      <NavbarProfile />
      <StyledBoxContainer>
        <SearchInput />

        <UserInfo>
          <ContainerProfile>
            <StyledText1>Vitor Kley</StyledText1>
            <StyledText2>Solteiro, Brasil</StyledText2>
          </ContainerProfile>
          <StyledButton onClick={handleButton}>Editar perfil</StyledButton>
        </UserInfo>

        <MobileOnly>
          <FriendComunity nameCategory="Amigos (248)">
            <ContainerImg>
              {friendList.map((friend, index) => (
                <Img key={index} {...friend} />
              ))}
            </ContainerImg>
          </FriendComunity>
        </MobileOnly>

        <ProfileComponent />

        <MobileOnly style={{ marginTop: "40px" }}>
          <FriendComunity nameCategory="Comunidade (42)">
            <ContainerImg>
              {comunityList.map((comunity, index) => (
                <Img key={index} {...comunity} />
              ))}
            </ContainerImg>
          </FriendComunity>
        </MobileOnly>

        <ComunityContainer>
          <FriendComunity nameCategory="Amigos (248)">
            <ContainerImg>
              {friendList.map((friend, index) => (
                <Img key={index} {...friend} />
              ))}
            </ContainerImg>
          </FriendComunity>
          <FriendComunity nameCategory="Comunidade (42)">
            <ContainerImg>
              {comunityList.map((comunity, index) => (
                <Img key={index} {...comunity} />
              ))}
            </ContainerImg>
          </FriendComunity>
        </ComunityContainer>

      </StyledBoxContainer>
    </StyledContainer>
  );
}
