import { FC } from "react";
import SignUpFormStepOne from "../components/Form/Sign/SignUpFormStepOne";
import LogUpImage from "../components/UI/logUpImage";

const SignUpStepOnePage:FC = () => {
  return (
    <>
      <LogUpImage />
      <SignUpFormStepOne />
    </>
  );
}

export default SignUpStepOnePage;
