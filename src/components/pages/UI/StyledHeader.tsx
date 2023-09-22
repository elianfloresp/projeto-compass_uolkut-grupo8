import styled from 'styled-components';

const StyledHeader = styled.header`
  /* width: 22.5rem; */
  height: 3.75rem;
  background-color: #FFFFFF; 
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #ED6D25;
  font-family: 'Roboto Flex', sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;


function Header() {
  return (
    <StyledHeader>
      <Title>UOLkut</Title>
    </StyledHeader>
  );
}

export default Header;
