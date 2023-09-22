import { FC } from "react";
import { Button, FormContainer, Input, Title } from "../pages/UI/StyledForm";

const RecoverPasswordForm:FC = () => {
  return (
    <FormContainer>
      <Title>Recupere sua senha</Title>
      <Input id='registered-email' className="special-input" placeholder="E-mail cadastrado" type='email'/>
      <Button type="submit">Enviar código</Button>

      <p>Lembrou sua senha?</p>
      <Button type="button">Entrar com as credenciais</Button>

    </FormContainer>
  );
}

export default RecoverPasswordForm;
