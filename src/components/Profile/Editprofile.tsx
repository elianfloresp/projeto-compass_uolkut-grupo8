import React from "react";
import styled from "styled-components";


const Navbar = styled.div`
  width: 84%;
  height: 44px;
  border-radius: 16px;
  background: #fdfeff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;


const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  margin-left: 10px; 

  SearchInput::placeholder {
    color: #ED6D25;
font-family: Roboto Flex;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 133.333% */
  }

`;
function Editprofile() {
  return (
    <Navbar>
      <SearchInput type="text" placeholder="Editar meu perfil" />
    </Navbar>
  );
}

export default Editprofile;
