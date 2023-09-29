import { FC } from "react";
import { FormContainer, Button, Title, Input, Label, Href } from "../Styled/StyledForm";

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
      <Button type="button" className="secondary">Criar conta</Button> {/* TODO: Consertar para deixar cinza */}

      <Href className="underline">
        Esqueci minha senha
      </Href>
      
    </FormContainer>
  );
}

export default SignInForm;
