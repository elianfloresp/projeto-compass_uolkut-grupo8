import { FC } from "react";
import EditProfile from "../components/Form/EditProfile";
import CardEditProfile from "../components/UI/CardEditProfile";

const EditProfilePage:FC = () => {
  return (
    <>
      <CardEditProfile />
      <EditProfile/>
    </>
  );
}

export default EditProfilePage;
