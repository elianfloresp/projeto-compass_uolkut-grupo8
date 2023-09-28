import styled from "styled-components";
import { ReactNode } from 'react';

const FriendContainer =styled.div`
width: 280px;
height: 411px;

border-radius: 16px;
background: #FDFEFF;
  @media (max-width: 768px) {
    width: 320px;
    height: 411px;
  }
`;

const CategoryName = styled.div`
color: #4B4B4B;
font-family: Roboto Flex;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
`;

const Total = styled.div`
color: #ED6D25;
font-family: Roboto Flex;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 24px;
`;
const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 77px;

    padding-top: 24px;
`;

interface FriendProps{
    nameCategory: string;
    children: ReactNode;
}

export default function FriendComunity({nameCategory, children}:FriendProps){
  return(
  <FriendContainer>
    <CategoryContainer>
      <CategoryName>{nameCategory}</CategoryName>
      <Total>Ver todos</Total>
    </CategoryContainer>
    {children}
  </FriendContainer>    
  );
};