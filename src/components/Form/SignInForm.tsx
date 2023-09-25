import { FC, useState } from "react";
import { FormContainer, Button, Title, Input, Href } from "../pages/UI/StyledForm";
import CustomCheckbox from '../pages/UI/StyledCB';

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

      <Button type="submit">Entrar na conta</Button>
      <Button type="button" className="secondary">Criar conta</Button>

      <Href className="underline">
        Esqueci minha senha
      </Href>
      
    </FormContainer>
  );
}

export default SignInForm;
