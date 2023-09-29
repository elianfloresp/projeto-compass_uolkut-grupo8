import { FC } from "react";
import {
  FormContainer,
  Input,
  Title,
  Label,
  Select,
  Button,
  TextArea,
} from "../Styled/StyledForm";

const SignUpFormStepTwo: FC = () => {
  return (
    <FormContainer>
      <Title>Cadastre-se no UOLkut</Title>
      <TextArea
        id="sign-up-description"
        className="special-input"
        placeholder="Quem sou eu?"
      />
      <Input
        id="sign-up-interests"
        className="special-input"
        placeholder="Interesses"
        type="text"
      />

      <Select id="sign-up-relationship" name="sign-up-relationship">
        <option selected disabled value="" style={{ color: "#868686" }}>
          Relacionamento
        </option>
        <option value="solteiro">Solteiro</option>
        <option value="casado">Casado</option>
        <option value="divorciado">Divorciado</option>
        <option value="namorando">Namorando</option>
        <option value="preocupado">Preocupado</option>
      </Select>

      <Input
        id="sign-up-children"
        className="special-input"
        placeholder="Número de Filhos"
        type="number"
      />

      <Select name="sign-up-smoke" id="sign-up-smoke">
        <option selected disabled value="" style={{ color: "#868686" }}>
          Hábitos de Fumo
        </option>
        <option value="never">Nunca</option>
        <option value="socially">Socialmente</option>
        <option value="sometimes">Às vezes</option>
        <option value="frequently">Com frequência</option>
        <option value="trying-to-quit">Tentando parar</option>
      </Select>

      <Select name="sign-up-drink" id="sign-up-drink">
        <option selected disabled value="" style={{ color: "#868686" }}>
          Hábitos de Bebida
        </option>
        <option value="never">Nunca</option>
        <option value="socially">Socialmente</option>
        <option value="sometimes">Às vezes</option>
        <option value="frequently">Com frequência</option>
        <option value="trying-to-quit">Tentando parar</option>
      </Select>

      <Label htmlFor="sign-up-profile-picture">
        Escolha uma foto de perfil
      </Label>
      <Input
        id="sign-up-profile-picture"
        className="special-input"
        type="file"
        accept="image/png, image/jpeg"
      />
      <Input
        id="sign-up-favorite-songs"
        className="special-input"
        placeholder="Músicas Favoritas"
        type="text"
      />
      <Input
        id="sign-up-favorite-movies"
        className="special-input"
        placeholder="Filmes Favoritos"
        type="text"
      />

      <Button type="submit">Salvar informações</Button>
    </FormContainer>
  );
};

export default SignUpFormStepTwo;
