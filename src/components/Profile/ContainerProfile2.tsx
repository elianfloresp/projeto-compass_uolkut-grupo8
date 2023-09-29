import styled from "styled-components";
import Imgbg from '../../assets/profile.svg';
import React, { ReactNode } from 'react';

interface CardProps {
  children?: ReactNode;
}

const StyledContainer = styled.div`
    width: 280px;
    height: 325px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 16px;
    background: #FDFEFF;
@media (max-width: 1199px){
    width: 320px;
    height: 260px;

}
`;
const StyledImgContainer = styled.div`
width: 184px;
height: 184px;

border: 3px solid #ED6D25;
border-radius: 50%;

display: flex;
justify-content: center;
align-items: center;

position: relative;

@media (max-width: 1199px){
    width: 124px;
    height: 124px;
    }
`;
const Img = styled.img` 
width: 170px;
height: 170px;
    @media (max-width: 1199px){
    width: 114px;
    height: 114px;
    }
`;
export default function Containerprofile2({children}: CardProps){
    return(
        <StyledContainer>
            <StyledImgContainer>
                <Img src={Imgbg} alt="profile user"/>
            </StyledImgContainer>
            {children}
        </StyledContainer>
    )
}
