import styled from "styled-components";

const StyledContainer = styled.div`
    position: relative;
    width: 800px;
    height: 598px;
    border-radius: 16px;
`;

const StyledLogUpWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 16px;
        background: linear-gradient(195deg, rgba(20, 20, 20, 0.00) 7.46%, #141414 69.4%);
        opacity: 0.72;
    }
`;

const StyledLogUpImage = styled.img`
    width: 100%;
    height: auto;
    
`;  

const StyledParagraph = styled.p`
    position: absolute;
    top: 30.62rem;
    right: 9.44rem;
    bottom: 2rem;
    left: 2rem;
    color: #FFF;
    font-family: Roboto Flex;
    font-size: 2rem;
    font-weight: 500;
    text-align: left;
    line-height: 2.375rem;
`; 

const LogUpImage = () => {
  return (
    <StyledContainer>
        <StyledLogUpWrapper>
            <StyledLogUpImage src="/log-up-image.svg" alt="Descrição da imagem" />
        </StyledLogUpWrapper>
        
        <StyledParagraph>
            Conecta-se aos seus amigos e familiares usando recados e mensagens instantâneas
        </StyledParagraph>
    </StyledContainer>
  );
};

export default LogUpImage;
