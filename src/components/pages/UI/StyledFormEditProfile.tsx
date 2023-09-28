import { FC, ReactNode } from "react";
import styled from "styled-components";
import UOLKutLogo from '../../../assets/ps_orkut.svg';


export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 320px;
  height: 582px; 

  box-sizing: border-box;

  padding: 3rem 0 2rem 0;

  background-color: #fcfdff;
  border-radius: 16px;
  box-shadow: 0px 4px 4px #00000040;

  overflow: auto;

  transition: all .1s linear;
  @media (min-width : 768px) {
    &.no-padding-top {
      padding: 1rem 0 2rem 0;
    }
    
    width: 37rem;
    height: 53.375rem;
    margin-left: 32px;
  }
`;

export const StyledTitle = styled.h1`
  margin-top: 0.5rem;
  padding-bottom: 2.19rem;

  color: #ed6d25;
  font-family: "Roboto Flex";

  font-size: 1.25rem; 
  font-weight: 800;

  &.inter {
    font-family: "Inter";
  }

  transition: all .1s linear;
  @media (min-width : 768px) {
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const Title:FC<{children: ReactNode}> = (props: {children: ReactNode}) => {
  return (
    <>
      <img src={UOLKutLogo} alt="UOLKut Logo" />
      <StyledTitle  >
       {props.children}
      </StyledTitle>
    </>
  );

}


export const Input = styled.input`
  &[type='text'],
  &[type='date'],
  &[type='password'] {
    width: 17.5625rem;
    height: 2.3125rem; 

    box-sizing: border-box;

    background: #eff3f8;

    border-radius: 8px;

    margin-top: 1.19rem;

    &:first-of-type {
      margin-top: 0rem;
    }
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }



  font-family: "Roboto Flex";
  font-size: 0.875rem;
  font-weight: 400;

  padding: 1rem;

  &.small-input {
    width: 8.5625rem;
  }


  transition: all .1s linear;
  @media (min-width : 768px) {
    font-size: 1rem;

    &[type='text'],
    &[type='date'],
    &[type='password'] {
      width: 16.6875rem;
      height: 3.1875rem;
      margin-top: 0;
      margin-bottom: 1rem;
    }
    
   
  }
`;




export const GridInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 21px 0 21px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top:1.19rem;

  @media (min-width : 768px) {
    // margin-top: 0rem;
    // margin-bottom: 1rem;
    padding-left: 24px;
    padding-right: 24px;
  
    
  }
`;

export const Button = styled.button`
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

    font-size: 1.125rem;
    &#save-button{
      margin-top: 0;
    }
  }
`;


