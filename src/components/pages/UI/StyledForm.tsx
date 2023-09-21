import styled from "styled-components";

export const FormContainer = styled.form`
  background-color: #fcfdff;
  border-radius: 16px;
  box-shadow: 0px 4px 4px #00000040;
  left: 0;
  position: fixed;
  top: 0;
  width: 20rem;
  height: 36.375rem;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ed6d25;
  font-family: Roboto;
  font-size: 1.25rem;
  padding-top: 3.06rem;
  padding-bottom: 2.19rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const Input = styled.input`
  background: #eff3f8;
  border-radius: 8px;
  margin-bottom: 1.19rem;
  &.small-input {
    width: 7.8125rem;
    height: 2.3125rem;
    padding-left: 0.7rem;
  }
  &.special-input {
    width: 281px;
    height: 37px;
    margin-left: 0.7rem;
    padding-left: 1rem;
  }
`;

export const Label = styled.label``;

export const DateLabel = styled.p``;

export const DateInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 0.8rem;
`;

export const Button = styled.button`
  width: 17.5625rem;
  height: 2.3125rem;
  border-radius: 0.5rem;
  background: #ed6d25;

  color: #fff;
  font-family: Roboto;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
`;

export const Select = styled.select`
  width: 8.5000rem;
  height: 2.3125rem;
  padding-left: 0.7rem;

  background: #eff3f8;
  border-radius: 8px;
  margin-bottom: 1.19rem;
  margin-left: 10.31rem;
`;

function Form() {
  const isMobile = true;
  return (
    <FormContainer>
      <Title>Cadastre-se no UOLkut</Title>
      {/* <Label htmlFor="sign-up-email">E-mail</Label> */}
      <Input
        id="sign-up-email"
        className="special-input"
        placeholder="E-mail"
        type="email"
      />
      {/* <Label htmlFor="sign-up-password">Senha</Label> */}
      <Input
        id="sign-up-password"
        className="special-input"
        placeholder="Senha"
        type="password"
      />
      {/* <Label htmlFor="sign-up-name">Nome</Label> */}
      <Input
        id="sign-up-name"
        className="special-input"
        placeholder="Nome"
        type="text"
      />

      <DateInputContainer>
        {/* {isMobile && <Label htmlFor="sign-up-birthday">DD/MM/AAAA</Label>} */}
        {!isMobile && <DateLabel>Nascimento</DateLabel>}
        <Input
          id="sign-up-birthday"
          className="small-input"
          placeholder={isMobile ? "DD/MM/AAAA" : "Nascimento"}
          type="date"
        />

        {!isMobile && <DateLabel>DDD/MM/AAAA</DateLabel>}
        <Input
          id="sign-up-occupation"
          className="small-input"
          placeholder="Profissão"
          type="text"
        />

        <div>
          {/* <Label htmlFor="sign-up-country">País</Label> */}
          <Input
            id="sign-up-country"
            className="small-input"
            placeholder="País"
            type="text"
          />
        </div>
        <div>
          {/* <Label htmlFor="sign-up-city">Cidade</Label> */}
          <Input
            id="sign-up-city"
            className="small-input"
            placeholder="Cidade"
            type="text"
          />
        </div>
      </DateInputContainer>
      {/* <Label htmlFor="sign-up-relationship">Relacionamento</Label> */}
      <Select id="sign-up-relationship" name="sign-up-relationship">
        <option value="" style={{ color: "#868686" }}>
          Relacionamento
        </option>
        <option value="solteiro">Solteiro</option>
        <option value="casado">Casado</option>
        <option value="divorciado">Divorciado</option>
        <option value="namorando">Namorando</option>
        <option value="preocupado">Preocupado</option>
      </Select>

      <Button type="submit">Criar conta</Button>
    </FormContainer>
  );
}

export default Form;
