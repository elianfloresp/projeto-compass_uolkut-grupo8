import { FC } from "react";

const SignUpFormStepOne:FC = () => {
  const isMobile = true;
  return (
    <form>
      <h1>Cadastre-se no UOLkut</h1>
      <input id='sign-up-email'        placeholder="E-mail" type='email'/>
      <input id='sign-up-password'     placeholder="Senha" type='password'/>
      <input id='sign-up-name'         placeholder="Nome" type='text'/>

      <div>
        { isMobile && <input id='sign-up-birthday'     placeholder="DD/MM/AAAA" type='date'/>}
        {!isMobile && <input id='sign-up-birthday'     placeholder="Nascimento" type='date'/>}
        {!isMobile && <p>DDD/MM/AAAA</p>}
        <input id='sign-up-occupation'   placeholder="Profissão" type='text'/>
      </div>

      <div>
        <input id='sign-up-country'      placeholder="País" type='text'/>
        <input id='sign-up-city'         placeholder="Cidade" type='text'/>
      </div>

      <select name='sign-up-relationship' id='sign-up-relationship'>
        <option value='' style={{color: '#868686'}}>Relacionamento</option>
        <option value='solteiro'>Solteiro</option>
        <option value='casado'>Casado</option>
        <option value='divorciado'>Divorciado</option>
        <option value='namorando'>Namorando</option>
        <option value='preocupado'>Preocupado</option>
      </select>

      <button type="submit">Criar conta</button>
    </form>
  );

}

export default SignUpFormStepOne;
