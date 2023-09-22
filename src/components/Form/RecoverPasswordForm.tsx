import { FC } from "react";
import { Button, FormContainer, Input, Title, Href } from "../pages/UI/StyledForm";

const RecoverPasswordForm:FC = () => {
  return (
    <FormContainer>
      <Title>Recupere sua senha</Title>
      <Input id='registered-email' placeholder="E-mail cadastrado" type='email'/>
      <Button type="submit">Enviar código</Button>

      <Href>Lembrou sua senha?</Href>
      <Button type="button" className="secondary">Entrar com as credenciais</Button>

    </FormContainer>
  );
}

export default RecoverPasswordForm;
