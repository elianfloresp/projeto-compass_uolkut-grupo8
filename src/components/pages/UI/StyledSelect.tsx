import { FC, useState } from 'react';
import styled from 'styled-components';

export const SelectMenu = styled.div`
  width: 8.4375rem;
  @media (min-width : 768px) {
    width: 11.3125rem;
  }
`;
export const ArrowIcon = styled.img`
  width: 1.3125rem;
  height: 1.31131rem;
`;

export const SelectBtn = styled.div`
  display: flex;
  background: #eff3f8;
  color: #868686;
  font-family: Roboto Flex;
  font-size: 0.875rem; 
  font-weight: 400;
  line-height: 1rem;
  padding-top: 0.56rem;
  padding: 0.44rem;
  border-radius: 8px;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  @media (min-width : 768px) {
    font-size: 1rem;
    line-height: 1.188rem;
  }
`;

export const Options = styled.ul`
  position: relative;
  padding: 0.56rem;
  margin-top: 0.12rem;
  border-radius: 0rem 0rem 0.375rem 0.375rem;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Option = styled.li`
    display: flex;
    8.4375rem
    height: 1.5rem;
    cursor: pointer;
    padding-bottom: 0.5rem;
    border-radius: 0;
    border-bottom: 1px solid #ED6D25;
    align-items: center;
    background: #fff;
    color: #8D8D8D;
    font-family: Roboto Flex;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &:hover {
        background: #F2F2F2;
    }
    @media (min-width : 768px) {
      font-size: 1rem;
      line-height: 1.188rem;
    }
`;

const CustomSelectMenu: FC = () => {
    const [selectedValue, setSelectedValue] = useState("");
    const [menuActive, setMenuActive] = useState(false);

    const options = [
        { value: "solteiro", label: "Solteiro" },
        { value: "casado", label: "Casado" },
        { value: "divorciado", label: "Divorciado" },
        { value: "namorando", label: "Namorando" },
        { value: "preocupado", label: "Preocupado", }
    ];

    return (
        <SelectMenu>
            <SelectBtn onClick={() => setMenuActive(!menuActive)}>
                <span>{selectedValue || "Relacionamento"}</span>
                <img src="/arrow.svg" alt=""  />

            </SelectBtn>

            {menuActive && (
                <Options>
                    {options.map(option => (
                        <Option key={option.value} onClick={() => {
                            setSelectedValue(option.label);
                            setMenuActive(false);
                        }}>
                            <span>{option.label}</span>
                        </Option>
                    ))}
                </Options>
            )}
        </SelectMenu>
    );
}

export default CustomSelectMenu;
