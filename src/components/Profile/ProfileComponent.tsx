import Container from "./Container";
import InforUser from "./InforUser";

import Statistics from "./Statistics";
import Preferences from "./Preferences";
import styled from "styled-components";

const StyledWelcome = styled.div`
  color: #4b4b4b;
  font-family: Roboto Flex;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  align-self: first baseline;
  margin-bottom: 26px;

  @media (max-width: 780px) {
    color: #4b4b4b;
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
  background: #eff3f8;
  height: 39.365px;
  width: 93%;
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  text-align: left;
  color: #4b4b4b;
  font-family: Roboto Flex;
  font-size: 16px;
  font-weight: 400;

  margin-bottom: 32px;
  padding-left: 12px;
  @media (max-width: 780px) {
    width: 272px;
    height: 32.677px;

    color: #4b4b4b;
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
  border-bottom: 17.714px solid #eff3f8;
  position: absolute;
  top: -10px;
  left: 20px;
`;

const StyledInforContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ProfileComponent = () => {
  return (
    <Container>
      <StyledBox>
        <StyledWelcome>Boa tarde, Vitor Kley</StyledWelcome>
        <StyledFrase>
          Programar sem café é igual poeta sem poesia. <StyledTriangle />
        </StyledFrase>
        <Statistics />
        <StyledInforContainer>
          <InforUser Inforr="Relacionamento" InforResultt="Solteiro" />
          <InforUser Inforr="Aniversário" InforResultt="21 de julho" />
          <InforUser Inforr="Idade" InforResultt="22" />
          <InforUser Inforr="Quem sou eu" InforResultt="Programador" />
          <InforUser Inforr="Moro" InforResultt="São Paulo" />
          <InforUser Inforr="País" InforResultt="Brasil" />
          <InforUser Inforr="Cidade" InforResultt="São Paulo" />
        </StyledInforContainer>
        <Preferences />
      </StyledBox>
    </Container>
  );
};

export default ProfileComponent;
