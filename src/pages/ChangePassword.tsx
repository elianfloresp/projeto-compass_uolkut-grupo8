import { FC } from "react";
import ChangePasswordForm from "../components/Form/Password/FormChangePassword";
import LogUpImage from "../components/UI/logUpImage";

const ChangePasswordPage:FC = () => {
  return (
    <>
      <LogUpImage />
      <ChangePasswordForm/>
    </>
  );
}

export default ChangePasswordPage;
