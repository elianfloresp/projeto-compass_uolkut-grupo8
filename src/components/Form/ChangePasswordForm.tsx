import { FC } from "react";
import { Link } from "react-router-dom";

const ChanngePasswordForm:FC = () => {
  const isMobile = true;
  return (
    <form>
      <h1>Nova senha</h1>
      <input id='authentication-code'        placeholder="Informe o código" type='number'/>
      <input id='new-password'        placeholder="Nova senha" type='password'/>
      <input id='confirm-password'        placeholder="Confirmar a senha" type='password'/>

      <button type="submit">Salvar</button>

      <p>Lembrou sua senha?</p>
      <Link to="/SignInForm">
        <button type="button">Entrar com as credenciais</button>
      </Link>

    </form>
  );
}

export default ChanngePasswordForm;
