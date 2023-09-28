import { FC  } from "react";
import useMediaQuery from "../../hooks/use-media-query";
import {
  FormContainer,
  Input,
  Title,
  GridInputContainer,
} from "../pages/UI/StyledFormEditProfile";
import LinkButton from "../UI/LinkButton";
import CustomSelectMenuEdit from "../pages/UI/StyledSelectEditProfile"

const EditProfileForm: FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <FormContainer className="no-padding-top">
      <Title>Editar informações</Title>
      <GridInputContainer>
      <Input
          id="edit-profile-occupation"
          placeholder="Profissão"
          type="text"
        />
       <CustomSelectMenuEdit/>

       <Input
        id="edit-profile-name"
        placeholder="Nome"
        type="text"
        />
        <Input
          id="edit-profile-city"
          placeholder="Cidade"
          type="text"
        />        
     
      
        <Input
          id="edit-profile-country"
          className="small-input"
          placeholder="País"
          type="text"
        />

        <Input
        id="edit-profile-birthday"
        className="small-input"
        placeholder="DD/MM/AAAA"
        type="text"
        />
       

        <Input
        id="edit-profile-password"
        className="small-input"
        placeholder="Senha"
        type="password"
        />
        <Input
        id="edit-profile-repeat-password"
        className="small-input"
        placeholder="Repetir senha"
        type="password"
        />
        </GridInputContainer>
      

        <LinkButton to='/' style={!isMobile ? {marginTop: '17.63rem'} : {}}>Salvar</LinkButton>

    </FormContainer>
  );
};

export default EditProfileForm;
