import { FC } from "react";
import SignUpFormStepOne from "../components/Form/Sign/SignUpFormStepOne";
import LogUpImage from "../components/UI/logUpImage";
import useMediaQuery from "../hooks/use-media-query";

const SignUpStepOnePage:FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <>
      {!isMobile && <LogUpImage />}
      <SignUpFormStepOne />
    </>
  );
}

export default SignUpStepOnePage;
