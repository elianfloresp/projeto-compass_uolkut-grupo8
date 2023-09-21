import { FC } from "react";
import { Link } from "react-router-dom";

const SignInForm:FC = () => {
  return (
    <form>
      <h1>Acesse o UOLkut</h1>
      <input id='sign-in-email'        placeholder="E-mail" type='email'/>
      <input id='sign-in-password'     placeholder="Senha" type='password'/>
      
      <div>
        <input type="checkbox" id="remember-my-password" />
        <label htmlFor="remember-my-password">Lembrar minha senha</label>
      </div>

      <button type="submit">Entrar na conta</button>
      <Link to="/SignUpFormStepOne">
        <button type="button">Criar conta</button>
      </Link>

      <Link to="/forgot-password" style={{ textDecoration: 'underline' }}>
        Esqueci minha senha
      </Link>
    </form>
  );
}

export default SignInForm;
