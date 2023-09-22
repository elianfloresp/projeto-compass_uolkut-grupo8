import { FC } from "react";
import { Button, FormContainer, Input, Title } from "../pages/UI/StyledForm";

const ChangePasswordForm:FC = () => {
  return (
    <FormContainer>
      <Title>Nova senha</Title>
      <Input id='authentication-code'className="special-input" placeholder="Informe o código" type='number'/>
      <Input id='new-password'       className="special-input" placeholder="Nova senha" type='password'/>
      <Input id='confirm-password'   className="special-input" placeholder="Confirmar a senha" type='password'/>

      <Button type="submit">Salvar</Button>

      <p>Lembrou sua senha?</p>
      <Button type="button">Entrar com as credenciais</Button>

    </FormContainer>
  );
}

export default ChangePasswordForm;
