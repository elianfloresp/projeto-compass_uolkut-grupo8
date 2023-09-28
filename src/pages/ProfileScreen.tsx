
import styled from "styled-components";
import Container from '../components/Profile/Container';
import Containerprofile from '../components/Profile/ContainerProfile';
import Containerprofile2 from '../components/Profile/ContainerProfile2';
import FriendComunity from "../components/Profile/FrienComunity";
import InforUser from "../components/Profile/InforUser";
import Img from "../components/Profile/Img";
import NavbarProfile2 from "../components/UI/NavbarProfile2";
import Footer from "../components/UI/Footer";



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
import Eggy from "../images/categorys/meuovo.png";

const StyledText1 = styled.div`
margin-top: 19px;
margin-bottom: 26px;

color: #4B4B4B;
font-family: Roboto Flex;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 24px;

@media(max-width: 780px){
  color: #4B4B4B;
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
color: #4B4B4B;
font-family: Roboto Flex;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px;
`;
const StyledContainer = styled.div`
  min-height: 100vh;
  background: #D9E6F7;

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
  background: #FDFEFF;

  color: #ED6D25;
  font-family: Roboto Flex;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  margin-top: 31px;
  @media(max-width: 780px){
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
  @media(max-width: 780px){
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    gap: 0px;
    margin: 0px 0px;
  }
`;
const StyledWelcome = styled.div`
color: #4B4B4B;
font-family: Roboto Flex;
font-size: 26px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: left;
align-self: first baseline;
margin-bottom: 26px;

@media(max-width: 780px){
  color: #4B4B4B;
font-family: Roboto Flex;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;

margin-bottom: 31px;
  }
`;

const StyledBox = styled.div`
  margin-left: 24px;
  width: 100%;
`;
const StyledFrase = styled.div`
border-radius: 10px;
background: #EFF3F8;
height: 39.365px;
width: 93%;
position: relative;

display: flex;
justify-content: flex-start;
align-items: center;

text-align: left;
color: #4B4B4B;
font-family: Roboto Flex;
font-size: 16px;
font-weight: 400;

margin-bottom: 32px;
padding-left: 12px;
@media(max-width: 780px){
  width: 272px;
  height: 32.677px;

  color: #4B4B4B;
  font-size: 12px;
  font-weight: 400;

  margin-bottom: 40px;
  }
`;
const StyledTriangle = styled.div`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 17.714px solid #EFF3F8;
  position: absolute;
  top: -10px;
  left: 20px;
`;
const StyledEstatisticas = styled.div`
display: flex;
align-items: center;
gap: 34px;
margin-bottom: 32px;
@media(max-width: 780px){
    align-items: center;
    flex-wrap: wrap;
    gap: 32px;
  }
`;
const TextEstatisticas = styled.div`
color: #4B4B4B;
font-family: Roboto Flex;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
const EstatisticaBox = styled.div`
display: flex;
align-items: center;
gap: 6px;
margin-top: 8px;
`;
const Infor = styled.div`
color: #B4AEAE;
font-family: Roboto Flex;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

const StyledInforContainer = styled.div`
display: flex;
flex-direction: column;
gap: 24px;

`;
const StyledUserPreferences = styled.div`
display: inline-flex;
padding: 2px 16px;
justify-content: center;
align-items: center;
gap: 10px;

border-radius: 30px;
border: 1px solid #ED6D25;

color: #4B4B4B;
font-family: Roboto Flex;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
@media(max-width: 780px){
  text-align: center;
  }
`;
const PreferencesContainer = styled.div`
display: flex;
gap: 14px;
margin-left: 12px;
margin-right: 22px;
@media(max-width: 780px){
    gap: 5px;
    margin-right: 12px;
    margin-left: 8px;
  }
`;
const SeeMore = styled.div`
color: #ED6D25;
font-family: ABeeZee;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px;
`;
const ContainerStyle = styled.div`
display: flex;
align-items: center;
`;
const ContainerPreferences = styled.div`
margin-top: 244px;
display: flex;
flex-direction: column;
gap: 23px;
@media(max-width: 780px){
    margin-top: 240px;
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
const Styledd = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const StyledDiv = styled.div`
  @media (max-width: 765px){
  margin-right: 100px;
  }
`;
const ContainerImg = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 30.5px;
flex-wrap: wrap;

padding-top: 32px;
@media (max-width: 765px){
  gap: 38.57px;
  }
`;
const StyledNumber = styled.div`
  color: #4B4B4B;
font-family: Roboto Flex;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
`;
const StyledSearch = styled.input`
    width: 270px;
    height: 44px;
    
    border-radius: 8px;
    background: #FDFEFF;
    border: none;

    display: none;
    color: #B4AEAE;
    font-family: Roboto Mono;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;

    padding-left: 51px;

    &:focus{
        outline: none;
    }

    @media (max-width: 768px){
      display: flex;
      padding-left: 50px;
      margin-top: 24px;
      margin-bottom: 32px;
  }
`;

const SearchContainer = styled.div`
    position: relative;
    display: none;
    align-items: center;
    @media (max-width: 768px) {
        display: flex;
    }
`;
const StyledFigure2 = styled.figure`
    position: absolute;
    top: 35px;
    left: 13.52px;
`;
const NoneStyled = styled.div`
  display: none;
  @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
    }
`;
const NoneStyled2 = styled.div`
  display: none;
  @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 40px 0px;
    }
`;
const Nonediv = styled.div`
  @media (max-width: 768px) {
        display: none;
    }
`;
export default function Profile(){

  function handleButton(){
    window.location.href = '/EditProfile';
  }
    return(
        <StyledContainer>
          <NavbarProfile2/>
            <StyledBoxContainer>
            <SearchContainer>
                    <StyledSearch placeholder="Pesquisar no UOLkut"/>  
                    <StyledFigure2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M10.875 19.7012C15.2242 19.7012 18.75 16.1787 18.75 11.8335C18.75 7.48826 15.2242 3.96576 10.875 3.96576C6.52576 3.96576 3 7.48826 3 11.8335C3 16.1787 6.52576 19.7012 10.875 19.7012Z" stroke="#B4AEAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.4434 17.3971L20.9996 21.9491" stroke="#B4AEAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                      
                    </StyledFigure2>
            </SearchContainer>
              <Styledd>
                <Containerprofile2>
                  <StyledText1>Gabriel Barbosa</StyledText1>
                  <StyledText2>Solteiro, Brasil</StyledText2>                    
                </Containerprofile2>
                <StyledButton onClick={handleButton}>Editar perfil</StyledButton>
              </Styledd>
              <NoneStyled>
                <FriendComunity nameCategory="Amigos (248)">
                    <ContainerImg>
                      <Img names="Fernando" src={ Fernando}/>
                      <Img names="Ana" src={ Ana }/>
                      <Img names="Carlos" src={ Carlos }/>
                      <Img names="Vitor" src={Vitor }/>
                      <Img names="Matheus" src={ Matheus}/>
                      <Img names="Ramos" src={Ramos }/>
                      <Img names="Eiji" src={Eiji }/>
                      <Img names="Julia" src={ Julia }/>
                      <Img names="Carol" src={ Carol }/>
                  </ContainerImg>
                </FriendComunity>
              </NoneStyled>
              <div>
                <Container>
                <StyledBox>
                  <StyledWelcome>Boa tarde, Gabriel Barbosa</StyledWelcome>
                  <StyledFrase>Programar sem café é igual poeta sem poesia. <StyledTriangle /></StyledFrase>
                  <StyledEstatisticas>
                    <div>
                      <TextEstatisticas>Fãs</TextEstatisticas>
                      <EstatisticaBox>
                        <figure>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12.4125 17.8781L17.1375 20.8781C17.7469 21.2625 18.4969 20.6906 18.3187 19.9875L16.95 14.6062C16.913 14.4571 16.9189 14.3005 16.967 14.1545C17.0151 14.0086 17.1034 13.8792 17.2219 13.7812L21.4594 10.2469C22.0125 9.78748 21.7312 8.85935 21.0094 8.81248L15.4781 8.45623C15.3272 8.44745 15.1821 8.39489 15.0606 8.30499C14.939 8.21508 14.8463 8.09172 14.7937 7.94998L12.7312 2.75623C12.6767 2.60614 12.5772 2.47648 12.4464 2.38486C12.3156 2.29324 12.1597 2.24409 12 2.24409C11.8403 2.24409 11.6844 2.29324 11.5536 2.38486C11.4228 2.47648 11.3233 2.60614 11.2687 2.75623L9.20625 7.94998C9.15368 8.09172 9.06096 8.21508 8.93943 8.30499C8.81789 8.39489 8.67279 8.44745 8.52187 8.45623L2.99062 8.81248C2.26875 8.85935 1.9875 9.78748 2.54062 10.2469L6.77812 13.7812C6.89656 13.8792 6.98492 14.0086 7.03302 14.1545C7.08112 14.3005 7.08701 14.4571 7.05 14.6062L5.78437 19.5937C5.56875 20.4375 6.46875 21.1219 7.19062 20.6625L11.5875 17.8781C11.7108 17.7997 11.8539 17.7581 12 17.7581C12.1461 17.7581 12.2892 17.7997 12.4125 17.8781Z" stroke="#FACF41" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </figure>
                        <StyledNumber>85</StyledNumber>
                      </EstatisticaBox>
                    </div>
                    <StyledDiv>
                      <TextEstatisticas>Confiável</TextEstatisticas>
                      <EstatisticaBox>
                        <figure>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#FACF41" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M8.625 11.25C9.24632 11.25 9.75 10.7463 9.75 10.125C9.75 9.50368 9.24632 9 8.625 9C8.00368 9 7.5 9.50368 7.5 10.125C7.5 10.7463 8.00368 11.25 8.625 11.25Z" fill="#FACF41"/>
                          <path d="M15.375 11.25C15.9963 11.25 16.5 10.7463 16.5 10.125C16.5 9.50368 15.9963 9 15.375 9C14.7537 9 14.25 9.50368 14.25 10.125C14.25 10.7463 14.7537 11.25 15.375 11.25Z" fill="#FACF41"/>
                          <path d="M15.8999 14.25C15.5034 14.9331 14.9345 15.5 14.25 15.8941C13.5656 16.2882 12.7896 16.4956 11.9999 16.4956C11.2101 16.4956 10.4341 16.2882 9.74969 15.8941C9.06526 15.5 8.49633 14.9331 8.09985 14.25" stroke="#FACF41" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </figure>
                        <figure>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#FACF41" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M8.625 11.25C9.24632 11.25 9.75 10.7463 9.75 10.125C9.75 9.50368 9.24632 9 8.625 9C8.00368 9 7.5 9.50368 7.5 10.125C7.5 10.7463 8.00368 11.25 8.625 11.25Z" fill="#FACF41"/>
                          <path d="M15.375 11.25C15.9963 11.25 16.5 10.7463 16.5 10.125C16.5 9.50368 15.9963 9 15.375 9C14.7537 9 14.25 9.50368 14.25 10.125C14.25 10.7463 14.7537 11.25 15.375 11.25Z" fill="#FACF41"/>
                          <path d="M15.8999 14.25C15.5034 14.9331 14.9345 15.5 14.25 15.8941C13.5656 16.2882 12.7896 16.4956 11.9999 16.4956C11.2101 16.4956 10.4341 16.2882 9.74969 15.8941C9.06526 15.5 8.49633 14.9331 8.09985 14.25" stroke="#FACF41" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </figure>
                      </EstatisticaBox>
                    </StyledDiv>
                    <div>
                      <TextEstatisticas>Legal</TextEstatisticas>
                      <EstatisticaBox>
                        <figure>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3 9.75H7.5V19.5H3C2.80109 19.5 2.61032 19.421 2.46967 19.2803C2.32902 19.1397 2.25 18.9489 2.25 18.75V10.5C2.25 10.3011 2.32902 10.1103 2.46967 9.96967C2.61032 9.82902 2.80109 9.75 3 9.75Z" stroke="#26CAFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.5 9.75L11.25 2.25C12.0456 2.25 12.8087 2.56607 13.3713 3.12868C13.9339 3.69129 14.25 4.45435 14.25 5.25V7.5H20.0531C20.2658 7.49947 20.4762 7.54447 20.67 7.63197C20.8639 7.71946 21.0368 7.84743 21.1771 8.00728C21.3174 8.16712 21.4219 8.35514 21.4835 8.55871C21.5451 8.76228 21.5625 8.97667 21.5344 9.1875L20.4094 18.1875C20.3639 18.5488 20.1885 18.8812 19.9159 19.1227C19.6434 19.3642 19.2923 19.4983 18.9281 19.5H7.5" stroke="#26CAFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </figure>
                        <figure>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3 9.75H7.5V19.5H3C2.80109 19.5 2.61032 19.421 2.46967 19.2803C2.32902 19.1397 2.25 18.9489 2.25 18.75V10.5C2.25 10.3011 2.32902 10.1103 2.46967 9.96967C2.61032 9.82902 2.80109 9.75 3 9.75Z" stroke="#26CAFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.5 9.75L11.25 2.25C12.0456 2.25 12.8087 2.56607 13.3713 3.12868C13.9339 3.69129 14.25 4.45435 14.25 5.25V7.5H20.0531C20.2658 7.49947 20.4762 7.54447 20.67 7.63197C20.8639 7.71946 21.0368 7.84743 21.1771 8.00728C21.3174 8.16712 21.4219 8.35514 21.4835 8.55871C21.5451 8.76228 21.5625 8.97667 21.5344 9.1875L20.4094 18.1875C20.3639 18.5488 20.1885 18.8812 19.9159 19.1227C19.6434 19.3642 19.2923 19.4983 18.9281 19.5H7.5" stroke="#26CAFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </figure>
                        <figure>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3 9.75H7.5V19.5H3C2.80109 19.5 2.61032 19.421 2.46967 19.2803C2.32902 19.1397 2.25 18.9489 2.25 18.75V10.5C2.25 10.3011 2.32902 10.1103 2.46967 9.96967C2.61032 9.82902 2.80109 9.75 3 9.75Z" stroke="#26CAFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.5 9.75L11.25 2.25C12.0456 2.25 12.8087 2.56607 13.3713 3.12868C13.9339 3.69129 14.25 4.45435 14.25 5.25V7.5H20.0531C20.2658 7.49947 20.4762 7.54447 20.67 7.63197C20.8639 7.71946 21.0368 7.84743 21.1771 8.00728C21.3174 8.16712 21.4219 8.35514 21.4835 8.55871C21.5451 8.76228 21.5625 8.97667 21.5344 9.1875L20.4094 18.1875C20.3639 18.5488 20.1885 18.8812 19.9159 19.1227C19.6434 19.3642 19.2923 19.4983 18.9281 19.5H7.5" stroke="#26CAFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </figure>
                      </EstatisticaBox>
                    </div>
                    <div>
                      <TextEstatisticas>Sexy</TextEstatisticas>
                      <EstatisticaBox>
                        <figure>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.625 7.49803 3.01546 6.40585 3.72996 5.53431C4.44445 4.66277 5.43884 4.0657 6.54393 3.84468C7.64903 3.62366 8.79657 3.79235 9.79131 4.32204C10.7861 4.85174 11.5665 5.70972 12 6.75001C12.4335 5.70972 13.2139 4.85174 14.2087 4.32204C15.2034 3.79235 16.351 3.62366 17.4561 3.84468C18.5612 4.0657 19.5555 4.66277 20.27 5.53431C20.9845 6.40585 21.375 7.49803 21.375 8.62501C21.375 15 12 20.25 12 20.25Z" stroke="#ED2590" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </figure>
                        <figure>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.625 7.49803 3.01546 6.40585 3.72996 5.53431C4.44445 4.66277 5.43884 4.0657 6.54393 3.84468C7.64903 3.62366 8.79657 3.79235 9.79131 4.32204C10.7861 4.85174 11.5665 5.70972 12 6.75001C12.4335 5.70972 13.2139 4.85174 14.2087 4.32204C15.2034 3.79235 16.351 3.62366 17.4561 3.84468C18.5612 4.0657 19.5555 4.66277 20.27 5.53431C20.9845 6.40585 21.375 7.49803 21.375 8.62501C21.375 15 12 20.25 12 20.25Z" stroke="#ED2590" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </figure>
                      </EstatisticaBox>
                    </div>
                  </StyledEstatisticas>
                  <StyledInforContainer>
                    <InforUser Inforr="Relacionamento" InforResultt="Solteiro"/>
                    <InforUser Inforr="Aniversário" InforResultt="21 de julho"/>
                    <InforUser Inforr="Idade" InforResultt="22"/>
                    <InforUser Inforr="Quem sou eu" InforResultt="Programador"/>
                    <InforUser Inforr="Moro" InforResultt="São Paulo"/>
                    <InforUser Inforr="País" InforResultt="Brasil"/>
                    <InforUser Inforr="Cidade" InforResultt="São Paulo"/>
                  </StyledInforContainer>
                  <ContainerPreferences>
                    <ContainerStyle>
                      <Infor>Músicas:</Infor>
                      <PreferencesContainer>
                        <StyledUserPreferences>Trap</StyledUserPreferences>
                        <Nonediv><StyledUserPreferences>Rap</StyledUserPreferences></Nonediv>
                        <Nonediv><StyledUserPreferences>Indie</StyledUserPreferences></Nonediv>
                        
                      </PreferencesContainer>
                      <SeeMore>
                        Ver todos
                      </SeeMore>
                    </ContainerStyle>
                    <ContainerStyle>
                      <Infor>Filmes:</Infor>
                      <PreferencesContainer>
                        <StyledUserPreferences>A rede social</StyledUserPreferences>
                        <Nonediv><StyledUserPreferences>meu amigo toroto</StyledUserPreferences></Nonediv>
                        
                      </PreferencesContainer>
                      <SeeMore>
                        Ver todos
                      </SeeMore>
                    </ContainerStyle>
                  </ContainerPreferences>
                </StyledBox>
                </Container>
              </div>
              <NoneStyled2>
                  <FriendComunity nameCategory="Comunidade (42)">
                    <ContainerImg>
                        <Img names="Carros" src={ Cars}/>
                        <Img names="Desenhos" src={ Desenhos }/>
                        <Img names="Crazy" src={ Crazy }/>
                        <Img names="Fofos" src={ Fofos }/>
                        <Img names="Animes" src={ Animes}/>
                        <Img names="Leitura" src={ Leitura }/>
                        <Img names="Meu ovo" src={ Eggy }/>
                        <Img names="My books" src={ Leitura }/>
                        <Img names="Cafeeee" src={ Coffe }/>
                    </ContainerImg>
                  </FriendComunity>                
                </NoneStyled2>
              <ComunityContainer>
                <FriendComunity nameCategory="Amigos (248)">
                  <ContainerImg>
                    <Img names="Fernando" src={ Fernando}/>
                    <Img names="Ana" src={ Ana }/>
                    <Img names="Carlos" src={ Carlos }/>
                    <Img names="Vitor" src={Vitor }/>
                    <Img names="Matheus" src={ Matheus}/>
                    <Img names="Ramos" src={Ramos }/>
                    <Img names="Eiji" src={Eiji }/>
                    <Img names="Julia" src={ Julia }/>
                    <Img names="Carol" src={ Carol }/>
                </ContainerImg>
                </FriendComunity>
                <FriendComunity nameCategory="Comunidade (42)">
                  <ContainerImg>
                      <Img names="Carros" src={ Cars}/>
                      <Img names="Desenhos" src={ Desenhos }/>
                      <Img names="Crazy" src={ Crazy }/>
                      <Img names="Fofos" src={ Fofos }/>
                      <Img names="Animes" src={ Animes}/>
                      <Img names="Leitura" src={ Leitura }/>
                      <Img names="Meu ovo" src={ Eggy }/>
                      <Img names="My books" src={ Leitura }/>
                      <Img names="Cafeeee" src={ Coffe }/>
                  </ContainerImg>
                </FriendComunity>
              </ComunityContainer>
            </StyledBoxContainer>
          <Footer/>
        </StyledContainer>
    )
}