import { FC } from "react";
import useMediaQuery from "../../hooks/use-media-query";
import {
  FormContainer,
  Input,
  Title,
  DateInputContainer,
  GridInputContainer,
  DateLabel,
  Button,
} from "../pages/UI/StyledForm";

const SignUpFormStepOne: FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
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


      <GridInputContainer>
        <DateInputContainer>
          <Input
            id="sign-up-birthday"
            className="small-input"
            placeholder={isMobile ? "DD/MM/AAAA" : "Nascimento"}
            type="text"
          />
          {!isMobile && <DateLabel>DDD/MM/AAAA</DateLabel>}
        </DateInputContainer>

        <Input
          id="sign-up-occupation"
          className="small-input"
          placeholder="Profissão"
          type="text"
        />

        <Input
          id="sign-up-country"
          className="small-input"
          placeholder="País"
          type="text"
        />
        <Input
          id="sign-up-city"
          className="small-input"
          placeholder="Cidade"
          type="text"
        />
      </GridInputContainer>

      <Button type="submit">Criar conta</Button>
    </FormContainer>
  );
};

export default SignUpFormStepOne;
