import React from "react";
import styled from "styled-components";


const Navbar = styled.div`
  width: 84%;
  height: 44px;
  border-radius: 8px;
  background: #fdfeff;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;


const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  margin-left: 10px; 
`;


const SearchIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: #555; /* Cor do ícone */
  margin-right: 8px; 
  
`;

function NavigationBar() {
  return (
    <Navbar>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="24"
        viewBox="0 0 23 24"
        fill="none"
      >
        <path
          d="M10.3239 18.75C14.2444 18.75 17.4225 15.2242 17.4225 10.875C17.4225 6.52573 14.2444 2.99997 10.3239 2.99997C6.40349 2.99997 3.22534 6.52573 3.22534 10.875C3.22534 15.2242 6.40349 18.75 10.3239 18.75Z"
          stroke="#B4AEAE"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.3433 16.4437L19.4503 20.9999"
          stroke="#B4AEAE"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <SearchInput type="text" placeholder="Pesquisar no UOLkut" />
    </Navbar>
  );
}

export default NavigationBar;
