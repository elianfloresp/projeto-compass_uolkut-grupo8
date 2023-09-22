import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  padding: 3rem 0 2rem 0;

  background-color: #fcfdff;
  border-radius: 16px;
  box-shadow: 0px 4px 4px #00000040;
  width: 24rem;
  height: 37.375rem; 
`;

// Tem alguns titles que a fonte é Inter
export const Title = styled.h1`
  padding-top: 3.06rem;
  padding-bottom: 2.19rem;

  color: #ed6d25;
  font-family: "Roboto Flex";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal; 

  &.inter {
    font-family: "Inter";
  }
`;

export const Input = styled.input`
  &[type='text'],
  &[type='email'],
  &[type='number'],
  &[type='password'] {
    width: 21rem;
    height: 3.1875rem;
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

  font-family: Roboto Flex;
  font-size: 1rem;
  font-weight: 400;

  padding: 0 1rem 0 1rem;

  &.small-input {
    width: 7.8125rem;
    height: 2.3125rem;
  }
`;

export const Label = styled.label`
  color: #868686;
`;

export const DateLabel = styled.p``;

export const DateInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 0.8rem;
`;

export const Button = styled.button`
  width: 21rem;
  height: 3.1875rem; 
  border-radius: 0.5rem;
  background: #ed6d25;

  color: #fff;
  font-family: "Roboto Flex";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;


  &.secondary {
    color: #ED6D25; 
    background: #EFF3F8;
  }
`;

export const Href = styled.a`
  color: #ed6d25;
  font-family: "Roboto Flex";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal; 

  &.underline{
    text-decoration: underline;
  }
`;

export const Select = styled.select`
  width: 8.5000rem;
  height: 2.3125rem;
  padding-left: 0.7rem;

  background: #eff3f8;
  border-radius: 8px;
  margin-bottom: 1.19rem;
  margin-left: 10.31rem;
`;
