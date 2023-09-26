import { FC } from "react";
import { FormContainer, Button, StyledTitle, Input, DateInputContainer, Select, EditInputContainer, CityCountryContainer } from "../pages/UI/StyledFormEditProfile";

const EditProfileForm:FC = () => {
  return (
    <FormContainer>
      <StyledTitle>Editar informações</StyledTitle>
      <DateInputContainer>
        <Input
          id="edit-profile-occupation"
          placeholder="Profissão"
          type="text"
        />
        <Select id="edit-profile-relationship" name="edit-profile-relationship">
        <option selected disabled value="" style={{ color: "#868686" }}>
          Relacionamento
        </option>
        <option value="solteiro">Solteiro</option>
        <option value="casado">Casado</option>
        <option value="divorciado">Divorciado</option>
        <option value="namorando">Namorando</option>
        <option value="preocupado">Preocupado</option>
        </Select>
      </DateInputContainer>

      <EditInputContainer>
        <Input
        id="edit-profile-name"
        placeholder="Nome"
        type="text"
        />
        

        <CityCountryContainer>
          <Input
            id="edit-profile-city"
            className="small-input"
            placeholder="Cidade"
            type="text"
          />
          <Input
            id="edit-profile-country"
            className="small-input"
            placeholder="País"
            type="text"
          />
        </CityCountryContainer>


        <Input
        id="edit-profile-password"
        placeholder="Senha"
        type="password"
        />
        <Input
        id="edit-profile-repeat-password"
        placeholder="Repetir senha"
        type="password"
        />
      </EditInputContainer>
      <Button type="submit">Salvar</Button>
   
    </FormContainer>
  );
}

export default EditProfileForm;
