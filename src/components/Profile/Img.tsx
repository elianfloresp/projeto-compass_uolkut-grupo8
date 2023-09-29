import styled from "styled-components";

interface ImgProps{
    names: string;
    src: string;
}

const StyledCont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

gap: 8px;
`;
const Nameperson = styled.div`
color: #4B4B4B;
font-family: Roboto Flex;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
const ImgStyled = styled.img`
width: 56px;
height: 56px;
`;
export default function Img({names, src}: ImgProps){

    return(
        <StyledCont>
            <ImgStyled src={src} alt="img person" />
            <Nameperson>{names}</Nameperson>
        </StyledCont>
    )
}