import { FC } from "react";
import SignUpFormStepOne from "../components/Form/SignUpFormStepOne";
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
