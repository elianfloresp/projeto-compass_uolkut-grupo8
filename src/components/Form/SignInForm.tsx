import { FC } from "react";
import { FormContainer, Button, Title, Input, Label } from "../pages/UI/StyledForm";

const SignInForm:FC = () => {
  return (
    <FormContainer>
      <Title>Acesse o UOLkut</Title>
      <Input id='sign-in-email' className="special-input" placeholder="E-mail" type='email'/>
      <Input id='sign-in-password' className="special-input" placeholder="Senha" type='password'/>
      
      <div>
        <Input type="checkbox" className="special-input" id="remember-my-password" />
        <Label htmlFor="remember-my-password">Lembrar minha senha</Label>
      </div>

      <Button type="submit">Entrar na conta</Button>
      <Button type="button">Criar conta</Button> {/* TODO: Consertar para deixar cinza */}

      <a style={{ textDecoration: 'underline', textAlign: 'center' }}> {/* TODO: adicionar href */}
        Esqueci minha senha
      </a>
      
    </FormContainer>
  );
}

export default SignInForm;
