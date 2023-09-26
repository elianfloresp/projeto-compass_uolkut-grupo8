import { FC } from "react";
import { FormContainer, Input, Title } from "../pages/UI/StyledForm";
import LinkButton from "../UI/LinkButton";

const ChangePasswordForm:FC = () => {
  return (
    <FormContainer>
      <Title>Nova senha</Title>
      <Input id='authentication-code' className="margin-113" placeholder="Informe o código" type='number'/>
      <Input id='new-password'        className="margin-113" placeholder="Nova senha" type='password'/>
      <Input id='confirm-password'    className="margin-125" placeholder="Confirmar a senha" type='password'/>

      <LinkButton to='/' id='save-button'>Salvar</LinkButton>

      <LinkButton to='/' simple style={{marginTop: '3.37rem'}}>Lembrou sua Senha?</LinkButton>
      <LinkButton to='/' secondary>Entrar com as credenciais</LinkButton>

    </FormContainer>
  );
}

export default ChangePasswordForm;
