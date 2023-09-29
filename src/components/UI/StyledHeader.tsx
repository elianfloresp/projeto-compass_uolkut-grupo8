import styled from "styled-components";
import Img from '../../imgs/bg.png';
import { useState } from "react";


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
    list-style: none; /* Adicione esta linha para remover os estilos de lista */
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
`;
const StyledName = styled.div`
color: #4B4B4B;
font-family: Roboto Flex;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;

margin-left: 11px;
margin-right: 50px;
`;
const StyledFigure = styled.figure`
    cursor: pointer;
`;
const StyledListMobile = styled(StyledList)`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: 60px;
        right: 0;

        width: 200px;
        height: 300px;

        background: #FDFEFF;
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
export default function NavbarProfile(){
    const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuVisible(!isMobileMenuVisible);
    };
    return(
        <StyledContainer>
            <StyledContainer1>
                <StyledText href="/">UOLkut</StyledText>
                          
            </StyledContainer1>
            <StyledContainer2>
                {/* <StyledImg src={ProfileImage} alt="user profile" />  precisamos definir as imagens pra por a fotod o perfil aqui */}
                <StyledName>Centro de segurança</StyledName>
                
        
            </StyledContainer2>
        </StyledContainer>
    )
}