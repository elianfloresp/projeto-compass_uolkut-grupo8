import styled from "styled-components";

interface InforProps{
    Inforr: string;
    InforResultt: string;
}


const InforContainer = styled.div`
display: flex;
align-items: center;
gap: 5px;
`;
const InforResult = styled.div`
color: #4B4B4B;
font-family: Roboto Flex;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
const Infor = styled.div`
color: #B4AEAE;
font-family: Roboto Flex;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
export default function InforUser({Inforr,InforResultt}:InforProps){
    return(
      <InforContainer>
        <Infor>{Inforr}:</Infor>
        <InforResult>{InforResultt}</InforResult>
      </InforContainer>
    )
  }