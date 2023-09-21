import { FC } from "react";
import { Link } from "react-router-dom";

const RecoverPasswordForm:FC = () => {
  const isMobile = true;
  return (
    <form>
      <h1>Recupere sua senha</h1>
      <input id='registered-email'        placeholder="E-mail cadastrado" type='email'/>
      <button type="submit">Enviar código</button>

      <p>Lembrou sua senha?</p>
      <Link to="/SignInForm">
        <button type="button">Entrar com as credenciais</button>
      </Link>

    </form>
  );
}

export default RecoverPasswordForm;
