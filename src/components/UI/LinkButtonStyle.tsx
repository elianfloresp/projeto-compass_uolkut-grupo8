import styled from "styled-components";

export const StyledButton = styled.button`
  width: 17.5625rem;
  height: 2.3125rem; 

  border-radius: 0.5rem;
  background: #ed6d25;

  margin-top: 1.19rem;

  color: #fff;
  font-family: "Roboto Flex";
  font-size: 0.875rem; 
  font-style: normal;
  font-weight: 400;
  line-height: 2.3125rem;


  &.secondary {
    color: #ED6D25; 
    background: #EFF3F8;
  }

  transition: all .1s linear;
  @media (min-width : 768px) {
    width: 21rem;
    height: 3.1875rem; 
    line-height: 3.1875rem;

    font-size: 1.125rem;
    &#save-button{
      margin-top: 0;
    }
  }
`;

export const StyledHref = styled.a`
  color: #ed6d25;
  font-family: "Roboto Flex";
  font-size: 0.875rem; 
  font-style: normal;
  font-weight: 400;
  line-height: normal; 

  &.underline{
    text-decoration: underline;
  }

  margin-top: 4.83rem;

  @media (min-width : 768px) {
    font-size: 1.125rem;
      margin-top: 6.81rem;
    &.underline{
      margin-top: 2rem;
    }
  }
`;
