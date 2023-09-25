import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.375rem;
  border: 1px solid #DCDCDC;
  background: #EFF3F8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  
  .checkbox-inner {
    width: 0.875rem;
    height: 0.875rem;
    border-radius: 0.25rem;
    background: #ED6D25;
    display: none;
  }

  /* Quando o checkbox estiver marcado */
  input:checked + .checkbox-inner {
    display: block;
  }
`;

interface CustomCheckboxProps {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked, onChange }) => (
  <CheckboxWrapper>
    <input type="checkbox" checked={checked} onChange={onChange} />
    <div className="checkbox-inner"></div>
  </CheckboxWrapper>
);

export default CustomCheckbox;