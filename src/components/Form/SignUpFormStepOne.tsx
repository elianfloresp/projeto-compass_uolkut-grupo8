import { FC } from "react";
import useMediaQuery from "../../hooks/use-media-query";
import {
  FormContainer,
  Input,
  Title,
  DateInputContainer,
  DateLabel,
  Button,
} from "../pages/UI/StyledForm";

const SignUpFormStepOne: FC = () => {
  const isMobile = useMediaQuery('(min-width: 600px)');
  return (
    <FormContainer>
      <Title>Cadastre-se no UOLkut</Title>
      <Input
        id="sign-up-email"
        placeholder="E-mail"
        type="email"
      />
      <Input
        id="sign-up-password"
        placeholder="Senha"
        type="password"
      />
      <Input
        id="sign-up-name"
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

      <Button type="submit">Criar conta</Button>
    </FormContainer>
  );
};

export default SignUpFormStepOne;
