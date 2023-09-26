import { FC, useState } from "react";
import { FormContainer, Title, Input } from "../pages/UI/StyledForm";
import CustomCheckbox from '../pages/UI/StyledCB';
import LinkButton from "../UI/LinkButton";

const SignInForm:FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prevState)=>!prevState);
  };

  return (
    <FormContainer>
      <Title>Acesse o UOLkut</Title>
      <Input id='sign-in-email' className="special-input" placeholder="E-mail" type='email'/>
      <Input id='sign-in-password' className="special-input" placeholder="Senha" type='password'/>
      
      <CustomCheckbox id='remember-my-password' checked={isChecked} onChange={handleChange} label="Lembrar minha senha" />

      <LinkButton to='/'>Entrar</LinkButton>
      <LinkButton to='/sign-up/step-one' secondary>Criar conta</LinkButton>

      <LinkButton to='/password/recover/' simple underline>
        Esqueci minha senha
      </LinkButton>
      
    </FormContainer>
  );
}

export default SignInForm;
