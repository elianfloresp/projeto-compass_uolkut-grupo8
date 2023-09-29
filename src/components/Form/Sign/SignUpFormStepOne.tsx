import { FC } from "react";
import useMediaQuery from "../../../hooks/use-media-query";
import {
  FormContainer,
  Input,
  Title,
  DateInputContainer,
  GridInputContainer,
  DateLabel,
} from "../Styled/StyledForm";
import LinkButton from "../../UI/LinkButton";
import CustomSelectMenu from "../../UI/StyledSelect"

const SignUpFormStepOne: FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <FormContainer className="no-padding-top">
      <Title style={{paddingBottom: '0'}}>Cadastre-se no UOLkut</Title>
      <Input
        id="sign-up-email"
        placeholder="E-mail"
        style={{marginTop: '1.25rem', marginBottom: '1rem'}}
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


      <GridInputContainer style={{marginBottom: '1rem'}}>
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
        
      <CustomSelectMenu style={{marginTop: '0', marginBottom: '2.31rem'}}/>

      <LinkButton style={{marginTop: '0'}} to='/'>Criar conta</LinkButton>
    </FormContainer>
  );
};

export default SignUpFormStepOne;
