import { FC } from "react";
import useMediaQuery from "../../hooks/use-media-query";
import { Button, FormContainer, Href, Input, Title } from "../pages/UI/StyledForm";

const ChangePasswordForm:FC = () => {
  const isMobile = useMediaQuery('(max-width: 768)');

  return (
    <FormContainer>
      <Title>Nova senha</Title>
      <Input id='authentication-code' className="margin-113" placeholder="Informe o código" type='number'/>
      <Input id='new-password'        className="margin-113" placeholder="Nova senha" type='password'/>
      <Input id='confirm-password'    className="margin-125" placeholder="Confirmar a senha" type='password'/>

      <Button type="submit" id='save-button'>Salvar</Button>

      <Href style={{marginTop: '3.37rem'}}>Lembrou sua Senha?</Href>
      <Button type="button" className="secondary">Entrar com as credenciais</Button>

    </FormContainer>
  );
}

export default ChangePasswordForm;
