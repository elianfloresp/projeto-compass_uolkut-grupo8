import styled from "styled-components";
import Img from '../../imgs/bg.png';
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
    width: 220px;
    height: 280px;
    margin-top: 30px;
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
`;
const StyledSpan = styled.span`
width: 42px;
height: 43px;

display: flex;
justify-content: center;
align-items: center;

background-color: #FDFEFF;
border: 3px solid #ED6D25;
border-radius: 50%;

position: absolute;
bottom: 10px;
left: -10px;
`;
export default function Containerprofile({children}: CardProps){
    return(
        <StyledContainer>
            <StyledImgContainer>
                <img src={Img} alt="profile user"/>
                <StyledSpan>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <g clip-path="url(#clip0_3_790)">
                            <path d="M3.125 17.9688V21.875H7.03125L18.5521 10.3542L14.6458 6.44796L3.125 17.9688ZM21.5729 7.33337C21.9792 6.92712 21.9792 6.27087 21.5729 5.86462L19.1354 3.42712C18.7292 3.02087 18.0729 3.02087 17.6667 3.42712L15.7604 5.33337L19.6667 9.23962L21.5729 7.33337Z" fill="#ED6D25"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_3_790">
                            <rect width="25" height="25" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </StyledSpan>
            </StyledImgContainer>
            {children}
        </StyledContainer>
    )
}