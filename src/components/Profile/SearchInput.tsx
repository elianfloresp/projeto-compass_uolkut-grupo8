import styled from "styled-components";

const SearchContainer = styled.div`
  position: relative;
  display: none;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const StyledSearchInput = styled.input`
  width: 270px;
  height: 44px;

  border-radius: 8px;
  background: #fdfeff;
  border: none;

  display: none;
  color: #b4aeae;
  font-family: Roboto Mono;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  padding-left: 51px;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    display: flex;
    padding-left: 50px;
    margin-top: 24px;
    margin-bottom: 32px;
  }
`;

const StyledFigure = styled.figure`
  position: absolute;
  top: 35px;
  left: 13.52px;
`;

const SearchInput = () => {
  return (
    <SearchContainer>
      <StyledSearchInput placeholder="Pesquisar no UOLkut" />
      <StyledFigure>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M10.875 19.7012C15.2242 19.7012 18.75 16.1787 18.75 11.8335C18.75 7.48826 15.2242 3.96576 10.875 3.96576C6.52576 3.96576 3 7.48826 3 11.8335C3 16.1787 6.52576 19.7012 10.875 19.7012Z"
            stroke="#B4AEAE"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.4434 17.3971L20.9996 21.9491"
            stroke="#B4AEAE"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </StyledFigure>
    </SearchContainer>
  );
};

export default SearchInput;
