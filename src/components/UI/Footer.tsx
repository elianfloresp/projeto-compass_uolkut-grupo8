import { styled } from "styled-components";

const StyledFooter = styled.footer`
  width: 100vw;
  height: 48px;
  position: absolute;
  bottom: 0;
   
  background-color: #FDFEFF;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #ED6D25;
    font-family: Roboto Flex;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 1.333333rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Todos os direitos reservados
      </p>
    </StyledFooter>
  );
};

export default Footer;
