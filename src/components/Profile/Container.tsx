import styled from 'styled-components';

const Container = styled.div`
  width: 592px;
  height: 854px;

  border-radius: 16px;
  background: #FDFEFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 767px){
    width: 320px;
    height: 947px;
  }
`
export default Container;
