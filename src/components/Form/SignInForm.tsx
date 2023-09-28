import { FC, useState } from "react";
import { FormContainer, Title, Input } from "../pages/UI/StyledForm";
import CustomCheckbox from '../pages/UI/StyledCB';
import LinkButton from "../UI/LinkButton";
import useMediaQuery from "../../hooks/use-media-query";

const SignInForm:FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleChange = () => {
    setIsChecked((prevState)=>!prevState);
  };

  return (
    <FormContainer>
      <Title>Acesse o UOLkut</Title>
      <Input 
        id='sign-in-email'
        className="special-input"
        placeholder="E-mail"
        type='email'
      />
      <Input
        id='sign-in-password'
        className="special-input"
        placeholder="Senha"
        type='password'
        style={{ marginBottom: '0' }}
      />
      
      <CustomCheckbox 
        id='remember-my-password'
        checked={isChecked} 
        onChange={handleChange} 
        label="Lembrar minha senha"
        style={{
          marginTop:    isMobile ? '2rem' : '1.5rem',
          marginBottom: isMobile ? '2.28rem' : '2.56rem',
        }}
      />

      <LinkButton to='/' style={{margin: 0}}>
        Entrar
      </LinkButton>
      
      <LinkButton 
        to='/sign-up/step-one'
        secondary
        style={{
          marginTop:    isMobile ? '1.55rem' : '1.5rem',
          marginBottom: isMobile ? '4.01rem' : '2rem',
        }}
      >
        Criar conta
      </LinkButton>

      <LinkButton 
        to='/password/recover/'
        simple underline
        style={{margin: 0}}
      >
        Esqueci minha senha
      </LinkButton>
      
    </FormContainer>
  );
}

export default SignInForm;
