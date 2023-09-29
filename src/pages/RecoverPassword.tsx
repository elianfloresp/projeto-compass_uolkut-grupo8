import { FC } from "react";
import RecoverPasswordForm from "../components/Form/Password/RecoverPasswordForm";
import LogUpImage from "../components/UI/logUpImage";

const RecoverPasswordPage:FC = () => {
  return (
    <>
      <LogUpImage />
      <RecoverPasswordForm/>
    </>
  );
}

export default RecoverPasswordPage;
