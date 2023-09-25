import { FC } from "react";
import SignInForm from "../components/Form/SignInForm";
import LogUpImage from "../components/UI/logUpImage";
import useMediaQuery from "../hooks/use-media-query";

const SignInPage:FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <>
      {!isMobile && <LogUpImage />}
      <SignInForm />
    </>
  );
}

export default SignInPage;
