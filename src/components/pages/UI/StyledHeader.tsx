import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 88%;
  height: 3.75rem;
  background-color: #FFFFFF; 
  margin: 0 auto; 
`;


const Title = styled.h1`
  color: #ED6D25;
  font-family: 'Roboto Flex', sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;


const div = styled.img`
  color: #ED6D25;
  font-family: 'Roboto Flex', sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;


function header() {
  return (
    <Header>
      <Title>UOLkut</Title>
      <div>
      <img src="bg.png" alt="logo" />
      <img src="arrow.png" alt="logo" />  
      </div>
    </Header>
  );
}

export default header;
