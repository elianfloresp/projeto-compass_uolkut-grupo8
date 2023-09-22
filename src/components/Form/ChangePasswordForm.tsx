import { FC } from "react";
import { Button, FormContainer, Href, Input, Title } from "../pages/UI/StyledForm";

const ChangePasswordForm:FC = () => {
  return (
    <FormContainer>
      <Title>Nova senha</Title>
      <Input id='authentication-code' placeholder="Informe o código" type='number'/>
      <Input id='new-password' placeholder="Nova senha" type='password'/>
      <Input id='confirm-password' placeholder="Confirmar a senha" type='password'/>

      <Button type="submit">Salvar</Button>

      <Href>Lembrou sua Senha?</Href>
      <Button type="button" className="secondary">Entrar com as credenciais</Button>

    </FormContainer>
  );
}

export default ChangePasswordForm;
