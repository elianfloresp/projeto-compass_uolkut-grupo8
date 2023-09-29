import { FC } from "react";
import SignInForm from "../components/Form/Sign/SignInForm";
import LogUpImage from "../components/UI/logUpImage";

const SignInPage:FC = () => {
  return (
    <>
      <LogUpImage />
      <SignInForm />
    </>
  );
}

export default SignInPage;
