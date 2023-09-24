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

  @media (min-width : 768px) {
    width: 24rem;
    height: 37.375rem; 
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
      <StyledTitle>
        {props.children}
      </StyledTitle>
    </>
  );

}

export const TextArea = styled.textarea`
  width: 17.5625rem;
  height: 6rem;
  box-sizing: border-box;

  resize: none;

  background: #eff3f8;

  border-radius: 8px;
  margin-bottom: 1.19rem;

  font-family: Roboto Flex;
  font-size: 1rem;
  font-weight: 400;

  padding: 1rem;

  @media (min-width : 768px) {
    width: 21rem;
  }
`;

export const Input = styled.input`
  &[type='text'],
  &[type='email'],
  &[type='number'],
  &[type='date'],
  &[type='password'] {
    width: 17.5625rem;
    height: 2.3125rem; 

    box-sizing: border-box;

    background: #eff3f8;

    border-radius: 8px;
    margin-bottom: 1.19rem;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }

  font-family: "Roboto Flex";
  font-size: 0.875rem;
  font-weight: 400;

  padding: 1rem;

  &.small-input {
    width: 7.8125rem;
  }


  @media (min-width : 768px) {
    font-size: 1rem;

    &[type='text'],
    &[type='email'],
    &[type='number'],
    &[type='date'],
    &[type='password'] {
      width: 21rem;
      height: 3.1875rem;
    }
  }
`;

export const Label = styled.label`
  color: #868686;
  font-size: 0.8125rem; 

  @media (min-width : 768px) {
    font-size: 1rem;
  }
`;

export const DateLabel = styled.label`
  color: #868686;
`;

export const DateInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1.31rem 0 1.31rem;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 17.5625rem;
  height: 2.3125rem; 

  border-radius: 0.5rem;
  background: #ed6d25;

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

  @media (min-width : 768px) {
    width: 21rem;
    height: 3.1875rem; 

    font-size: 1.125rem;
  }
`;

export const Href = styled.a`
  color: #ed6d25;
  font-family: "Roboto Flex";
  font-size: 0.875rem; 
  font-style: normal;
  font-weight: 400;
  line-height: normal; 

  &.underline{
    text-decoration: underline;
  }

  @media (min-width : 768px) {
    font-size: 1.125rem;
  }
`;

export const Select = styled.select`
  width: 8.5625rem;
  height: 2.1875rem; 

  padding: 0.56rem;
  padding-top: 0.44rem;

  background: #eff3f8;

  font-family: Roboto Flex;
  font-size: 0.875rem; 
  font-weight: 400;

  color: #868686;

  border-radius: 8px;
  margin-bottom: 1.19rem;

  @media (min-width : 768px) {
    width: 11.5rem;
    height: 2.1875rem;
    font-size: 1rem;
  }
`;
