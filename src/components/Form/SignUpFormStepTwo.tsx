import { FC } from "react";

const SignUpFormStepTwo:FC = () => {
  return (
    <form>
      <h1>Cadastre-se no UOLkut</h1>
      <input id='sign-up-description'     placeholder="Quem sou eu?" type='text'/>
      <input id='sign-up-interests'       placeholder="Interesses" type='text'/>
      { /* TA REPETIDO ? 
        <select name='sign-up-relationship' id='sign-up-relationship'>
          <option value='' style={{color: '#868686'}}>Relacionamento</option>
          <option value='solteiro'>Solteiro</option>
          <option value='casado'>Casado</option>
          <option value='divorciado'>Divorciado</option>
          <option value='namorando'>Namorando</option>
          <option value='preocupado'>Preocupado</option>
        </select> */ }
      <input id='sign-up-children'        placeholder="Número de Filhos" type='number'/>

      <select name='sign-up-smoke' id='sign-up-smoke'>
        <option value='' style={{color: '#868686'}}>Hábitos de Fumo</option>
        <option value='never'>Nunca</option>
        <option value='socially'>Socialmente</option>
        <option value='sometimes'>Às vezes</option>
        <option value='frequently'>Com frequência</option>
        <option value='trying-to-quit'>Tentando parar</option>
      </select>

      <select name='sign-up-drink' id='sign-up-drink'>
        <option value='' style={{color: '#868686'}}>Hábitos de Bebida</option>
        <option value='never'>Nunca</option>
        <option value='socially'>Socialmente</option>
        <option value='sometimes'>Às vezes</option>
        <option value='frequently'>Com frequência</option>
        <option value='trying-to-quit'>Tentando parar</option>
      </select>

      <label htmlFor="sign-up-profile-picture">Escolha uma foto de perfil</label>
      <input id='sign-up-profile-picture' type='file' accept="image/png, image/jpeg"/>
      <input id='sign-up-favorite-songs'  placeholder="Músicas Favoritas" type='text'/>
      <input id='sign-up-favorite-movies' placeholder="Filmes Favoritos" type='text'/>

      <button type="submit">Salvar informações</button>
    </form>
  );

}

export default SignUpFormStepTwo;
