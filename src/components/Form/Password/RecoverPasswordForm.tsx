import { FC } from "react";
import { FormContainer, Input, Title } from "../Styled/StyledForm";
import LinkButton from "../../UI/LinkButton";

const RecoverPasswordForm:FC = () => {
  return (
    <FormContainer>
      <Title>Recupere sua senha</Title>
      <Input id='registered-email' placeholder="E-mail cadastrado" type='email'/>

      <LinkButton to='/password/change'>Enviar código</LinkButton>

      <LinkButton to='/' simple>Lembrou sua senha?</LinkButton>
      <LinkButton to='/' secondary>Entrar com as credenciais</LinkButton>

    </FormContainer>
  );
}

export default RecoverPasswordForm;
