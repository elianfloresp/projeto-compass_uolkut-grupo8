import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../hooks/use-media-query";
import {
  FormContainer,
  Input,
  Title,
  DateInputContainer,
  GridInputContainer,
  DateLabel,
} from "../pages/UI/StyledForm";
import SubmitButton from "../UI/SubmitButton";

interface AccountInfo {
  email?: string;
  password?: string;
  name?: string;
  birthday?: string;
  occupation?: string;
  country?: string;
  city?: string;
}

interface AccountValidation {
  email?: boolean;
  password?: boolean;
  name?: boolean;
  birthday?: boolean;
  occupation?: boolean;
  country?: boolean;
  city?: boolean;
}

const SignUpFormStepOne: FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [accountInfo, setAccountInfo] = useState<AccountInfo>();
  const [accountValidation, setAccountValidation] = useState<AccountValidation>();
  const navigate = useNavigate();

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target!;
    console.log(accountValidation);
    

    switch (name) {
      case 'email':
        if (value.trim().match(/.*@.*\..*/i)) {
          setAccountValidation(prevState => ({ ...prevState, email: true}))
          break;
        }
        setAccountValidation(prevState => ({ ...prevState, email: false}))
        break;

      case 'password':
        setAccountValidation(prevState => ({ ...prevState, password: value.length >= 8}))
        break;

      case 'birthday':
        if (value.trim().match(/\d\d\/\d\d\/\d\d\d\d/i)) {
          setAccountValidation(prevState => ({ ...prevState, birthday: true}))
          break;
        }
        setAccountValidation(prevState => ({ ...prevState, birthday: false}))
        break;
    }

    setAccountInfo(prevState => ({ ...prevState, name: value }))
  };

  const submitHandler = (event:FormEvent) => {
    event.preventDefault();
    
    if (!accountValidation) return;
    if (!Object.values(accountValidation).reduce((t, n) => t && n)) return;

    localStorage.clear();
    localStorage.setItem('account-info', JSON.stringify(accountInfo));

    navigate('/');
  }

  return (
    <FormContainer className="no-padding-top" onSubmit={submitHandler}>
      <Title>Cadastre-se no UOLkut</Title>
      <Input
        id="sign-up-email"
        placeholder="E-mail"
        type="email"
        name="email"
        className={`${accountValidation?.email === false ? 'invalid' : ''}`}
        required
        onChange={changeHandler}
      />
      <Input
        id="sign-up-password"
        placeholder="Senha"
        type="password"
        name="password"
        className={`${accountValidation?.password === false ? 'invalid' : ''}`}
        required
        onChange={changeHandler}
      />
      <Input
        id="sign-up-name"
        placeholder="Nome"
        type="text"
        name="name"
        className={`${accountValidation?.name === false ? 'invalid' : ''}`}
        required
        onChange={changeHandler}
      />


      <GridInputContainer>
        <DateInputContainer>
          <Input
            id="sign-up-birthday"
            placeholder={isMobile ? "DD/MM/AAAA" : "Nascimento"}
            type="text"
            name="birthday"
            className={`small-input ${accountValidation?.birthday === false ? 'invalid' : ''}`}
            required
            onChange={changeHandler}
          />
          {!isMobile && <DateLabel>DD/MM/AAAA</DateLabel>}
        </DateInputContainer>

        <Input
          id="sign-up-occupation"
          placeholder="Profissão"
          type="text"
          name="occupation"
          className={`small-input ${accountValidation?.occupation === false ? 'invalid' : ''}`}
          required
          onChange={changeHandler}
        />

        <Input
          id="sign-up-country"
          placeholder="País"
          type="text"
          name="country"
          className={`small-input ${accountValidation?.country === false ? 'invalid' : ''}`}
          required
          onChange={changeHandler}
        />
        <Input
          id="sign-up-city"
          placeholder="Cidade"
          type="text"
          name="city"
          className={`small-input ${accountValidation?.city === false ? 'invalid' : ''}`}
          required
          onChange={changeHandler}
        />
      </GridInputContainer>
        
      {/* TODO: ADICIONAR SELECT DE RELACIONAMENTO AQUI*/}

      <SubmitButton> Criar conta </SubmitButton>
    </FormContainer>
  );
};

export default SignUpFormStepOne;
