import { FC } from "react";
import SignUpFormStepTwo from "../components/Form/Sign/SignUpFormStepTwo";
import LogUpImage from "../components/UI/logUpImage";
import useMediaQuery from "../hooks/use-media-query";

const SignUpStepTwoPage:FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <>
      {!isMobile && <LogUpImage />}
      <SignUpFormStepTwo />
    </>
  );
}

export default SignUpStepTwoPage;
