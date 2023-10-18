import styled from "styled-components";

const StyledUserPreferences = styled.div`
  display: inline-flex;
  padding: 2px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 30px;
  border: 1px solid #ed6d25;

  color: #4b4b4b;
  font-family: Roboto Flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  @media (max-width: 780px) {
    text-align: center;
  }
`;

const PreferencesContainer = styled.div`
  display: flex;
  gap: 14px;
  margin-left: 12px;
  margin-right: 22px;
  @media (max-width: 780px) {
    gap: 5px;
    margin-right: 12px;
    margin-left: 8px;
  }
`;

const SeeMore = styled.div`
  color: #ed6d25;
  font-family: ABeeZee;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const ContainerStyle = styled.div`
  display: flex;
  align-items: center;
`;

const ContainerPreferences = styled.div`
  margin-top: 244px;
  display: flex;
  flex-direction: column;
  gap: 23px;
  @media (max-width: 780px) {
    margin-top: 240px;
  }
`;

const Infor = styled.div`
  color: #b4aeae;
  font-family: Roboto Flex;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Nonediv = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Preferences = () => {
  return (
    <ContainerPreferences>
      <ContainerStyle>
        <Infor>Músicas:</Infor>
        <PreferencesContainer>
          <StyledUserPreferences>Trap</StyledUserPreferences>
          <Nonediv>
            <StyledUserPreferences>Rap</StyledUserPreferences>
          </Nonediv>
          <Nonediv>
            <StyledUserPreferences>Indie</StyledUserPreferences>
          </Nonediv>
        </PreferencesContainer>
        <SeeMore>Ver todos</SeeMore>
      </ContainerStyle>
      <ContainerStyle>
        <Infor>Filmes:</Infor>
        <PreferencesContainer>
          <StyledUserPreferences>A rede social</StyledUserPreferences>
          <Nonediv>
            <StyledUserPreferences>meu amigo toroto</StyledUserPreferences>
          </Nonediv>
        </PreferencesContainer>
        <SeeMore>Ver todos</SeeMore>
      </ContainerStyle>
    </ContainerPreferences>
  );
};

export default Preferences
