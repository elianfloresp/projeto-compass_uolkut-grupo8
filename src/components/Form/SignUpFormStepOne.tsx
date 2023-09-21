import { FC } from "react";
import {
  FormContainer,
  Input,
  Title,
  DateInputContainer,
  DateLabel,
  Select,
  Button,
} from "../pages/UI/StyledForm";

const SignUpFormStepOne: FC = () => {
  const isMobile = true;
  return (
    <FormContainer>
      <Title>Cadastre-se no UOLkut</Title>
      <Input
        id="sign-up-email"
        className="special-input"
        placeholder="E-mail"
        type="email"
      />
      <Input
        id="sign-up-password"
        className="special-input"
        placeholder="Senha"
        type="password"
      />
      <Input
        id="sign-up-name"
        className="special-input"
        placeholder="Nome"
        type="text"
      />

      <DateInputContainer>
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
          <Input
            id="sign-up-country"
            className="small-input"
            placeholder="País"
            type="text"
          />
        </div>
        <div>
          <Input
            id="sign-up-city"
            className="small-input"
            placeholder="Cidade"
            type="text"
          />
        </div>
      </DateInputContainer>

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
};

export default SignUpFormStepOne;
