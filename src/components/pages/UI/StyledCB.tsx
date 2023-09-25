import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  width: 0.875rem;
  height: 0.9375rem;
  border-radius: 0.25rem; 
  background: #EFF3F8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  
  .checkbox-inner {
    width: 0.875rem;
    height: 0.9375rem;
    border-radius: 0.25rem;
    background: #ED6D25;
    display: none;
  }

  /* Quando o checkbox estiver marcado */
  input:checked + .checkbox-inner {
    display: block;
  }

  @media (min-width: 768px){
    width: 1.25rem;
    height: 1.25rem;

    border-radius: 0.375rem;
    border: 1px solid #DCDCDC;

    & .checkbox-inner {
      width: 0.875rem;
      height: 0.875rem;
    }
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin: 31px 0 41px 21px;

  
  & label {
    color: #868686;
    font-family: Roboto Flex;
    font-size: 0.8125rem; 
    font-weight: 400;
    margin-left: 10px;
  }

  @media (min-width: 768px){
    & label {
      font-size: 1rem;
    }
  }
`;

interface CustomCheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({id, label, checked, onChange}) => {
  const handleChange = () => {
    onChange()
  }

  return (
    <CheckboxContainer>
      <CheckboxWrapper onClick={handleChange}>
        <input id={id} type="checkbox" checked={checked}/>
        <div className="checkbox-inner"></div>
      </CheckboxWrapper>
      <label htmlFor="remember-my-password">{label}</label>
    </CheckboxContainer>
  );
};

export default CustomCheckbox;
