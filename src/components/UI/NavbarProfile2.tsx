import styled from "styled-components";
import Img from '../../images/bg.png';
import { useState } from "react";
import CaretDown from "../../images/CaretDown.svg";
const StyledContainer = styled.div`
width: 100%;
height: 60px;
display: flex;
justify-content: space-around;
align-items: center;
background: #FDFEFF;
@media (min-width: 1200px){
    justify-content: space-around;
    height: 70px;
}
@media (min-width: 1900px){
    justify-content: space-around;
    height: 92px;
}
`;
const StyledText = styled.a`
color: #ED6D25;
font-family: Roboto Flex;
font-size: 20px;
font-style: normal;
font-weight: 800;
text-align: center;
text-decoration: none;
@media (min-width: 1200px){
    font-size: 28px;
}
@media (min-width: 1900px){
    font-size: 36px;
}
`;
const StyledItem = styled.li`
    cursor: pointer;
    color: #4B4B4B;
    font-family: Roboto Flex;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    &:hover{
        color: #ED6D25;
    }
`;
const StyledList = styled.ul`
    display: flex;
    align-items: center;
    gap: 37px;
    @media (max-width: 768px){
    display: none;
}
`;
const StyledContainer1 = styled.div`
    display: flex;
    align-items: center;
    gap: 31px;
`;
const StyledContainer2 = styled.div`
    display: flex;
    align-items: center;
`;
const StyledImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    @media (max-width: 767px){
        width: 24px;
        height: 24px;
    }
`;
const StyledName = styled.div`
color: #4B4B4B;
font-family: Roboto Flex;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;

margin-left: 11px;
@media (max-width: 767px){
    display: none;
  }
`;
const StyledFigure = styled.img`
    cursor: pointer;
    width: 24px;
    height: 23.978px;
    margin-left: 5px;
    @media (max-width: 767px){
        width: 16px;
        height: 15.985px;
    }
`;
const StyledListMobile = styled(StyledList)`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: 65px;
        right: 10px;

        width: 200px;
        height: 240px;

        background: #EFF3F8;
        z-index: 1;

        color: #868686;
        font-family: Roboto Flex;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        border-radius: 16px;
    }
`;
const StyledSearch = styled.input`
    width: 304px;
    height: 43.959px;
    border-radius: 8px;
    background: #EFF3F8;
    border: none;
    margin-right: 14px;

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
`;

const SearchContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
    }
`;
const StyledFigure2 = styled.figure`
    position: absolute;
    top: 10px;
    left: 15px;
`;
export default function NavbarProfile2(){
    const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuVisible(!isMobileMenuVisible);
    };
    return(
        <StyledContainer>
            <StyledContainer1>
                <StyledText href="/">UOLkut</StyledText>
                <StyledList>
                    <StyledItem>Inicio</StyledItem>
                    <StyledItem>Perfil</StyledItem>
                    <StyledItem>Comunidades</StyledItem>
                    <StyledItem>Jogos</StyledItem>
                </StyledList>                
            </StyledContainer1>
            <StyledContainer2>
                <SearchContainer>
                    <StyledSearch placeholder="Pesquisar no UOLkut"/>  
                    <StyledFigure2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M10.875 19.7012C15.2242 19.7012 18.75 16.1787 18.75 11.8335C18.75 7.48826 15.2242 3.96576 10.875 3.96576C6.52576 3.96576 3 7.48826 3 11.8335C3 16.1787 6.52576 19.7012 10.875 19.7012Z" stroke="#B4AEAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.4434 17.3971L20.9996 21.9491" stroke="#B4AEAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                      
                    </StyledFigure2>
                </SearchContainer>
                
                <StyledImg src={Img} alt="user profile" />
                <StyledName>Gabriel Barbosa</StyledName>
                <StyledFigure src={CaretDown} onClick={toggleMobileMenu}/>
                {isMobileMenuVisible && (
                <StyledListMobile>
                    <StyledItem>Inicio</StyledItem>
                    <StyledItem>Perfil</StyledItem>
                    <StyledItem>Comunidades</StyledItem>
                    <StyledItem>Jogos</StyledItem>
                </StyledListMobile>
            )}
            </StyledContainer2>
        </StyledContainer>
    )
}